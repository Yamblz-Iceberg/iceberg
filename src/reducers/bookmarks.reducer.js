import { getSavedCollectionsFetch, getCreatedCollectionsFetch, getSavedLinksFetch, getAddedLinksFetch } from '../services/bookmarks.service';
import { showLoader } from './loader.reducer';

export const GET_USER_COLLECTIONS = 'GET_USER_COLLECTIONS';
export const GET_USER_LINKS = 'GET_USER_LINKS';

const initialState = {
    typeToFeed: 'createdCollection',
    collections: [],
    links: [],
};

const getSavedCollectionsAction = (data, type) =>
    ({ type: GET_USER_COLLECTIONS, payload: data.collections, typeToFeed: type });
const getCreatedCollectionsAction = (data, type) =>
    ({ type: GET_USER_COLLECTIONS, payload: data.collections, typeToFeed: type });
const getSavedLinksAction = (data, type) =>
    ({ type: GET_USER_LINKS, payload: data.links, typeToFeed: type });
const getAddedLinksAction = (data, type) =>
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

const getSavedCollections = (token, type) => (
    (dispatch) => {
        dispatch(showLoader());
        getSavedCollectionsFetch(token).then((data) => {
            dispatch(getSavedCollectionsAction(data, type));
        });
    }
);

const getCreatedCollections = (token, type) => (
    (dispatch) => {
        dispatch(showLoader());
        getCreatedCollectionsFetch(token).then((data) => {
            dispatch(getCreatedCollectionsAction(data, type));
        });
    }
);

// Ссылки

// TODO: подумать насчет параметра type - возможно как-то сократить
const getSavedLinks = (token, type, linkType) => (
    (dispatch) => {
        dispatch(showLoader());
        getSavedLinksFetch(token, linkType).then((data) => {
            dispatch(getSavedLinksAction(data, type));
        });
    }
);

const getAddedLinks = (token, type) => (
    (dispatch) => {
        dispatch(showLoader());
        getAddedLinksFetch(token).then((data) => {
            dispatch(getAddedLinksAction(data, type));
        });
    }
);

export {
    reducer,
    getCreatedCollections,
    getSavedLinks,
    getSavedCollections,
    getAddedLinks,
};
