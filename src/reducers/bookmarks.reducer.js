import { fetchSavedCollections, fetchMyCollections, fetchSavedLinks, fetchMyLinks } from '../services/bookmarks.service';
import { showLoader } from './loader.reducer';

export const GET_USER_COLLECTIONS = 'GET_USER_COLLECTIONS';
export const GET_USER_LINKS = 'GET_USER_LINKS';

const initialState = {
    typeToFeed: 'myCollection',
    collections: [],
    links: [],
};

const getSavedCollections = (data, type) =>
    ({ type: GET_USER_COLLECTIONS, payload: data.collections, typeToFeed: type });
const getMyCollections = (data, type) =>
    ({ type: GET_USER_COLLECTIONS, payload: data.collections, typeToFeed: type });
const getSavedLinks = (data, type) =>
    ({ type: GET_USER_LINKS, payload: data.links, typeToFeed: type });
const getMyLinks = (data, type) =>
    ({ type: GET_USER_LINKS, payload: data.links, typeToFeed: type });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_USER_COLLECTIONS:
        return { ...state,
            typeToFeed: action.typeToFeed,
            collections: action.payload,
        };
    case GET_USER_LINKS:
        return { ...state,
            typeToFeed: action.typeToFeed,
            links: action.payload,
        };
    default:
        return state;
    }
};

const savedCollectionsLoader = (token, type) => (
    (dispatch) => {
        dispatch(showLoader());
        fetchSavedCollections(token).then((data) => {
            dispatch(getSavedCollections(data, type));
        });
    }
);

const myCollectionsLoader = (token, type) => (
    (dispatch) => {
        dispatch(showLoader());
        fetchMyCollections(token).then((data) => {
            dispatch(getMyCollections(data, type));
        });
    }
);

const savedLinksLoader = (token, type) => (
    (dispatch) => {
        dispatch(showLoader());
        fetchSavedLinks(token).then((data) => {
            dispatch(getSavedLinks(data, type));
        });
    }
);

const myLinksLoader = (token, type) => (
    (dispatch) => {
        dispatch(showLoader());
        fetchMyLinks(token).then((data) => {
            dispatch(getMyLinks(data, type));
        });
    }
);

export {
    reducer,
    myCollectionsLoader,
    savedLinksLoader,
    savedCollectionsLoader,
    myLinksLoader,
};
