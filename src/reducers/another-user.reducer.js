import { fetchUser, getSavedCollectionsFetch } from '../services/another-user.service';

const FETCH_ANOTHER_USER = 'FETCH_ANOTHER_USER';
const FETCH_ANOTHER_USER_COLLECTIONS = 'FETCH_ANOTHER_USER_COLLECTIONS';

const initialState = {
    data: {},
    collections: [],
};

const loadUser = data => ({ type: FETCH_ANOTHER_USER, payload: data });
const loadCollections = data => ({ type: FETCH_ANOTHER_USER_COLLECTIONS, payload: data });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_ANOTHER_USER:
        return { ...state, data: action.payload };
    case FETCH_ANOTHER_USER_COLLECTIONS:
        return { ...state, collections: action.payload };
    default:
        return state;
    }
};

const userLoader = (token, id) => (
    (dispatch) => {
        fetchUser(token, id).then((data) => {
            dispatch(loadUser(data));
        });
    }
);

const collectionsLoader = (token, id) => (
    (dispatch) => {
        getSavedCollectionsFetch(token, id).then((data) => {
            dispatch(loadCollections(data.collections));
        });
    }
);

export {
    reducer,
    userLoader,
    collectionsLoader,
};
