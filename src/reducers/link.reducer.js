import { postLink, postLinkToCollection } from './../services/link.service';

const ADD_LINK = 'ADD_LINK';
const PUSH_LINK_TO_COLLECTION = 'PUSH_LINK_TO_COLLECTION';

const initialState = {
    result: {
        url: '',
        title: '',
        photo: '',
        favicon: '',
    },
    created: false,
};

const addLink = res => ({ type: ADD_LINK, payload: res });
const pushLinkToCollection = () => ({ type: PUSH_LINK_TO_COLLECTION });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_LINK:
        return { ...state, ...action.payload };
    case PUSH_LINK_TO_COLLECTION:
        return state;
    default:
        return state;
    }
};

export const createLink = (data, token) => (
    (dispatch) => {
        postLink(data, token).then((res) => {
            dispatch(addLink(res));
        });
    }
);

export const addLinkToCollection = (collectionId, linkId, token, callback) => (
    (dispatch) => {
        postLinkToCollection(collectionId, linkId, token).then(() => {
            dispatch(pushLinkToCollection());
        }).then(() => callback);
    }
);

export { reducer };
