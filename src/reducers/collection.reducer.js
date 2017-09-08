import { fetchCollection, putCollectionToSaved, delCollectionFromSaved } from '../services/collection.service';
import { changeLikeOfLink } from './../services/link.service';

const FETCH_COLLECTION = 'FETCH_COLLECTION';
const CHANGE_SAVED_STATUS = 'CHANGE_SAVED_STATUS';
const CHANGE_LIKED_STATUS_BY_ID = 'CHANGE_LIKED_STATUS_BY_ID';

const initialState = {
    description: '',
    photo: '',
    author: {
        firstName: '',
        lastName: '',
        photo: '',
    },
    name: '',
    tags: [],
    links: [],
    savedTimesCount: 0,
    saved: false,
};

const loadCollection = collection => ({ type: FETCH_COLLECTION, payload: collection });
const changeSavedStatus = status => ({ type: CHANGE_SAVED_STATUS, payload: status });
const changeLikedStatusById = (id, status) => ({ type: CHANGE_LIKED_STATUS_BY_ID, id, status });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_COLLECTION:
        return { ...state, ...action.payload };
    case CHANGE_SAVED_STATUS:
        return { ...state,
            saved: action.payload,
            savedTimesCount: state.savedTimesCount + (action.payload ? 1 : -1),
        };
    case CHANGE_LIKED_STATUS_BY_ID: {
        const update = (items, id, status) => {
            const editedLinksList = [].concat(items);
            const editindLink = editedLinksList[items.findIndex(x => x._id === id)];
            editindLink.liked = status;
            if (status) {
                editindLink.likes += 1;
            } else {
                editindLink.likes -= 1;
            }
            return editedLinksList;
        };

        return { ...state,
            links: update([...state.links], action.id, action.status),
        };
    }
    default:
        return state;
    }
};

const collectionLoader = (collectionId, token) => (
    (dispatch) => {
        fetchCollection(collectionId, token).then((res) => {
            dispatch(loadCollection(res.collection));
        });
    }
);

const putToSavedLoader = (id, token) => (
    (dispatch) => {
        putCollectionToSaved(id, token).then(() => {
            dispatch(changeSavedStatus(true));
        });
    }
);

const delFromSavedLoader = (id, token) => (
    (dispatch) => {
        delCollectionFromSaved(id, token).then(() => {
            dispatch(changeSavedStatus(false));
        });
    }
);

const changeLikeOfLinkLoader = (id, status, token) => (
    (dispatch) => {
        dispatch(changeLikedStatusById(id, status));
        changeLikeOfLink(id, token);
    }
);

export {
    reducer,
    collectionLoader,
    putToSavedLoader,
    delFromSavedLoader,
    changeLikeOfLinkLoader,
};
