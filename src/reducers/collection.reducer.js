import { getCollectionFetch, setCollectionAsSavedFetch, deleteCollectionFromSavedFetch } from '../services/collection.service';
import { changeStatusLikeOfLinkFetch, setLinkAsSavedFetch, deleteLinkFromeSavedFetch } from './../services/link.service';

const FETCH_COLLECTION = 'FETCH_COLLECTION';
const CHANGE_SAVED_STATUS = 'CHANGE_SAVED_STATUS';
const CHANGE_LIKED_STATUS_BY_ID = 'CHANGE_LIKED_STATUS_BY_ID';
const CHANGE_LINK_SAVED_STATUS_BY_ID = 'CHANGE_LINK_SAVED_STATUS_BY_ID';
const CHANGE_LINK_OPENED_STATUS_BY_ID = 'CHANGE_LINK_OPENED_STATUS_BY_ID';

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
const changeLikedStatusOfLinkById =
    (id, status) => ({ type: CHANGE_LIKED_STATUS_BY_ID, id, status });
const changeSavedStatusOfLinkById =
    (id, status) => ({ type: CHANGE_LINK_SAVED_STATUS_BY_ID, id, status });
const changeOpenStatusOfLinkById =
    id => ({ type: CHANGE_LINK_OPENED_STATUS_BY_ID, id });

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
    case CHANGE_LINK_SAVED_STATUS_BY_ID: {
        const update = (items, id, status) => {
            const editedLinksList = [].concat(items);
            const editindLink = editedLinksList[items.findIndex(x => x._id === id)];
            editindLink.saved = status;
            if (status) {
                editindLink.savedTimesCount += 1;
            } else {
                editindLink.savedTimesCount -= 1;
            }
            return editedLinksList;
        };

        return { ...state,
            links: update([...state.links], action.id, action.status),
        };
    }
    case CHANGE_LINK_OPENED_STATUS_BY_ID: {
        const update = (items, id) => {
            const editedLinksList = [].concat(items);
            const editindLink = editedLinksList[items.findIndex(x => x._id === id)];
            editindLink.opened = true;
            return editedLinksList;
        };

        return { ...state,
            links: update([...state.links], action.id),
        };
    }
    default:
        return state;
    }
};

const getCollection = (collectionId, token) => (
    (dispatch) => {
        getCollectionFetch(collectionId, token).then((res) => {
            dispatch(loadCollection(res.collection));
        });
    }
);

const setCollectionAsSaved = (id, token) => (
    (dispatch) => {
        setCollectionAsSavedFetch(id, token).then(() => {
            dispatch(changeSavedStatus(true));
        });
    }
);

const deleteCollectionFromSaved = (id, token) => (
    (dispatch) => {
        deleteCollectionFromSavedFetch(id, token).then(() => {
            dispatch(changeSavedStatus(false));
        });
    }
);

const changeStatusLikeOfLink = (id, status, token) => (
    (dispatch) => {
        dispatch(changeLikedStatusOfLinkById(id, status));
        changeStatusLikeOfLinkFetch(id, token);
    }
);

const changeStatusSavedOfLink = (id, status, token) => (
    (dispatch) => {
        dispatch(changeSavedStatusOfLinkById(id, status));
        if (!status) {
            deleteLinkFromeSavedFetch(id, token);
        } else {
            setLinkAsSavedFetch(id, token);
        }
    }
);

export {
    reducer,
    getCollection,
    setCollectionAsSaved,
    deleteCollectionFromSaved,
    changeStatusLikeOfLink,
    changeStatusSavedOfLink,
    changeOpenStatusOfLinkById,
};
