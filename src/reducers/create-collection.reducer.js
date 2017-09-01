import { postCollection } from './../services/create-collection.service';

const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
const UPDATE_TITLE = 'UPDATE_TITLE';
const UPDATE_SWITCHER = 'UPDATE_SWITCHER';
const CLEAR_COLLECTION = 'CLEAR_COLLECTION';
const ADD_HASHTAG = 'ADD_HASHTAG';

const initialState = {
    description: '',
    title: '',
    hashTags: [],
};

const updateDescription = description => ({ type: UPDATE_DESCRIPTION, payload: description });
const updateTitle = title => ({ type: UPDATE_TITLE, payload: title });
const updateSwitcher = (id, status) => ({ type: UPDATE_SWITCHER, payload: { [id]: status } });
const clearCollection = () => ({ type: CLEAR_COLLECTION });
const addHashTag = text => ({ type: ADD_HASHTAG, payload: text });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case UPDATE_DESCRIPTION:
        return { ...state, description: action.payload };
    case UPDATE_TITLE:
        return { ...state, title: action.payload };
    case UPDATE_SWITCHER:
        return { ...state, options: { ...state.options, ...action.payload } };
    case ADD_HASHTAG: {
        const id = state.hashTags.length;

        return {
            ...state,
            hashTags: [
                ...state.hashTags,
                { id, text: action.payload },
            ],
        };
    }
    case CLEAR_COLLECTION:
        return { initialState };
    default:
        return state;
    }
};

export const createCollection = (data, token, callback) => (
    (dispatch) => {
        postCollection(data, token).then(() => {
            dispatch(clearCollection());
        }).then(() => callback());
    }
);

export { reducer, updateDescription, updateTitle, updateSwitcher, addHashTag };
