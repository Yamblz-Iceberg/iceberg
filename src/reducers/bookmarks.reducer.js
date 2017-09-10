import { fetchSavedCollections, fetchCreatedCollections, fetchSavedLinks, fetchAddedLinks } from '../services/bookmarks.service';
import { showLoader } from './loader.reducer';

export const GET_USER_COLLECTIONS = 'GET_USER_COLLECTIONS';
export const GET_USER_LINKS = 'GET_USER_LINKS';

const initialState = {
    typeToFeed: 'createdCollection',
    collections: [],
    links: [],
};

const getSavedCollections = (data, type) =>
    ({ type: GET_USER_COLLECTIONS, payload: data.collections, typeToFeed: type });
const getCreatedCollections = (data, type) =>
    ({ type: GET_USER_COLLECTIONS, payload: data.collections, typeToFeed: type });
const getSavedLinks = (data, type) =>
    ({ type: GET_USER_LINKS, payload: data.links, typeToFeed: type });
const getAddedLinks = (data, type) =>
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

// Коллекции

const savedCollectionsLoader = (token, type) => (
    (dispatch) => {
        dispatch(showLoader());
        fetchSavedCollections(token).then((data) => {
            dispatch(getSavedCollections(data, type));
        });
    }
);

const createdCollectionsLoader = (token, type) => (
    (dispatch) => {
        dispatch(showLoader());
        fetchCreatedCollections(token).then((data) => {
            dispatch(getCreatedCollections(data, type));
        });
    }
);

// Ссылки

// TODO: подумать насчет параметра type - возможно как-то сократить
const savedLinksLoader = (token, type, linkType) => (
    (dispatch) => {
        dispatch(showLoader());
        fetchSavedLinks(token, linkType).then((data) => {
            dispatch(getSavedLinks(data, type));
        });
    }
);

const addedLinksLoader = (token, type) => (
    (dispatch) => {
        dispatch(showLoader());
        fetchAddedLinks(token).then((data) => {
            dispatch(getAddedLinks(data, type));
        });
    }
);

export {
    reducer,
    createdCollectionsLoader,
    savedLinksLoader,
    savedCollectionsLoader,
    addedLinksLoader,
};
