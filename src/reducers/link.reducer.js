import { postLink, addLinkToCollectionFetch, removeLinkFetch, setLinkAsOpenedFetch } from './../services/link.service';
import { showLoader } from './../reducers/loader.reducer';

export const ADD_LINK = 'ADD_LINK';
export const DELETE_LINK = 'DELETE_LINK';
export const ADD_COMMENT = 'ADD_COMMENT';
export const CLEAR_LINK = 'CLEAR_LINK';
export const PUSH_LINK_TO_COLLECTION = 'PUSH_LINK_TO_COLLECTION';
export const OPEN_LINK = 'OPEN_LINK';

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

const createLinkAction = res => ({ type: ADD_LINK, payload: res });
const removeLinkAction = () => ({ type: DELETE_LINK });
const addComment = description => ({ type: ADD_COMMENT, payload: description });
const openLinkAction = () => ({ type: OPEN_LINK });
const clearLink = () => ({ type: CLEAR_LINK });
const addLinkToCollectionAction = () => ({ type: PUSH_LINK_TO_COLLECTION });

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
            dispatch(createLinkAction(res));
        });
    }
);

export const setLinkAsOpened = (id, token) => (
    (dispatch) => {
        setLinkAsOpenedFetch(id, token).then(() => {
            dispatch(openLinkAction(true));
        });
    }
);

export const removeLink = (id, token) => (
    (dispatch) => {
        removeLinkFetch(id, token).then((res) => {
            dispatch(removeLinkAction(res));
        });
    }
);

export const addLinkToCollection = (collectionId, linkId, token, description, callback) => (
    (dispatch) => {
        addLinkToCollectionFetch(collectionId, linkId, token, description).then(() => {
            dispatch(addLinkToCollectionAction());
        }).then(() => callback);
    }
);

export { reducer, addComment, clearLink };
