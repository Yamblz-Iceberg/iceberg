import { fetchUser, fetchSavedCollections, fetchSavedLinks } from '../services/user.service';

const FETCH_USER = 'FETCH_USER';
const GET_SAVED_COLLECTIONS = 'GET_SAVED_COLLECTIONS';
const GET_SAVED_LINKS = 'GET_SAVED_LINS';

const initialState = {
    data: {},
    typeToFeed: 'collections',
    archive: {
        savedCollections: [],
        savedLinks: [],
    },
};

const loadUser = data => ({ type: FETCH_USER, payload: data });
const getSavedCollections = data =>
    ({ type: GET_SAVED_COLLECTIONS, payload: data.collections, typeToFeed: 'collections' });
const getSavedLinks = data =>
    ({ type: GET_SAVED_LINKS, payload: data.links, typeToFeed: 'links' });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_USER:
        return { ...state, data: action.payload };
    case GET_SAVED_COLLECTIONS:
        return { ...state,
            typeToFeed: action.typeToFeed,
            archive: {
                ...state.archive,
                savedCollections: action.payload,
            },
        };
    case GET_SAVED_LINKS:
        return { ...state,
            typeToFeed: action.typeToFeed,
            archive: {
                ...state.archive,
                savedLinks: action.payload,
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

const savedCollectionsLoader = token => (
    (dispatch) => {
        fetchSavedCollections(token).then((data) => {
            dispatch(getSavedCollections(data));
        });
    }
);

const savedLinksLoader = token => (
    (dispatch) => {
        fetchSavedLinks(token).then((data) => {
            dispatch(getSavedLinks(data));
        });
    }
);

export { reducer, userLoader, savedCollectionsLoader, savedLinksLoader };
