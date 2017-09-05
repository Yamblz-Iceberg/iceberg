import { fetchCollection, putCollectionToSaved, delCollectionFromSaved } from '../services/collection.service';

const FETCH_COLLECTION = 'FETCH_COLLECTION';
const CHANGE_SAVED_STATUS = 'CHANGE_SAVED_STATUS';

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

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_COLLECTION:
        return { ...state, ...action.payload };
    case CHANGE_SAVED_STATUS:
        return { ...state, saved: action.payload };
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

export { reducer, collectionLoader, putToSavedLoader, delFromSavedLoader };
