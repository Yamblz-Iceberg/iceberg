import { fetchUser, fetchSavedCollections, fetchMyCollections, fetchSavedLinks } from '../services/user.service';

const FETCH_USER = 'FETCH_USER';
const GET_USER_COLLECTIONS = 'GET_USER_COLLECTIONS';
const GET_SAVED_LINKS = 'GET_SAVED_LINS';

const initialState = {
    data: {},
    typeToFeed: 'myCollection',
    archive: {
        collections: [],
        links: [],
    },
};

const loadUser = data => ({ type: FETCH_USER, payload: data });
const getSavedCollections = (data, type) =>
    ({ type: GET_USER_COLLECTIONS, payload: data.collections, typeToFeed: type });
const getMyCollections = (data, type) =>
    ({ type: GET_USER_COLLECTIONS, payload: data.collections, typeToFeed: type });
const getSavedLinks = (data, type) =>
    ({ type: GET_SAVED_LINKS, payload: data.links, typeToFeed: type });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_USER:
        return { ...state, data: action.payload };
    case GET_USER_COLLECTIONS:
        return { ...state,
            typeToFeed: action.typeToFeed,
            archive: {
                ...state.archive,
                collections: action.payload,
            },
        };
    case GET_SAVED_LINKS:
        return { ...state,
            typeToFeed: action.typeToFeed,
            archive: {
                ...state.archive,
                links: action.payload,
            },
        };
    default:
        return state;
    }
};


const userLoader = token => (
    (dispatch) => {
        fetchUser(token).then((data) => {
            dispatch(loadUser(data));
        });
    }
);

const savedCollectionsLoader = (token, type) => (
    (dispatch) => {
        fetchSavedCollections(token).then((data) => {
            dispatch(getSavedCollections(data, type));
        });
    }
);

const myCollectionsLoader = (token, type) => (
    (dispatch) => {
        fetchMyCollections(token).then((data) => {
            dispatch(getMyCollections(data, type));
        });
    }
);

const savedLinksLoader = (token, type) => (
    (dispatch) => {
        fetchSavedLinks(token).then((data) => {
            dispatch(getSavedLinks(data, type));
        });
    }
);

export {
    reducer,
    userLoader,
    myCollectionsLoader,
    savedLinksLoader,
    savedCollectionsLoader,
};
