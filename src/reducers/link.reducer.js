import { postLink, postLinkToCollection, postDeleteLink, putOpenLink } from './../services/link.service';
import { showLoader } from './../reducers/loader.reducer';

export const ADD_LINK = 'ADD_LINK';
const DELETE_LINK = 'DELETE_LINK';
const ADD_COMMENT = 'ADD_COMMENT';
const CLEAR_LINK = 'CLEAR_LINK';
const PUSH_LINK_TO_COLLECTION = 'PUSH_LINK_TO_COLLECTION';
const OPEN_LINK = 'OPEN_LINK';

const initialState = {
    result: {
        url: '',
        photo: '',
        favicon: '',
        name: '',
    },
    metrics: {
        openTime: null,
        opened: false,
    },
    created: false,
    saved: false,
    liked: false,
    likes: 0,
    description: '',
};

const addLink = res => ({ type: ADD_LINK, payload: res });
const deleteLink = () => ({ type: DELETE_LINK });
const addComment = description => ({ type: ADD_COMMENT, payload: description });
const openLink = () => ({ type: OPEN_LINK });
const clearLink = () => ({ type: CLEAR_LINK });
const pushLinkToCollection = () => ({ type: PUSH_LINK_TO_COLLECTION });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_LINK:
        return { ...state, ...action.payload };
    case OPEN_LINK:
        return { ...state, metrics: { ...state.metrics, opened: true } };
    case DELETE_LINK:
        return { ...initialState };
    case ADD_COMMENT:
        return { ...state, description: action.payload };
    case PUSH_LINK_TO_COLLECTION:
        return state;
    case CLEAR_LINK:
        return { ...initialState };
    default:
        return state;
    }
};

export const createLink = (data, token) => (
    (dispatch) => {
        dispatch(showLoader());
        postLink(data, token).then((res) => {
            dispatch(addLink(res));
        });
    }
);

export const openLinkLoader = (id, token) => (
    (dispatch) => {
        putOpenLink(id, token).then(() => {
            dispatch(openLink(true));
        });
    }
);

export const removeLink = (id, token) => (
    (dispatch) => {
        postDeleteLink(id, token).then((res) => {
            dispatch(deleteLink(res));
        });
    }
);

export const addLinkToCollection = (collectionId, linkId, token, description, callback) => (
    (dispatch) => {
        postLinkToCollection(collectionId, linkId, token, description).then(() => {
            dispatch(pushLinkToCollection());
        }).then(() => callback);
    }
);

export { reducer, addComment, clearLink };
