import { postCollection, postHashtagToSaved } from './../services/create-collection.service';

const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
const UPDATE_TITLE = 'UPDATE_TITLE';
const UPDATE_SWITCHER = 'UPDATE_SWITCHER';
const CLEAR_COLLECTION = 'CLEAR_COLLECTION';
const ADD_HASHTAG = 'ADD_HASHTAG';
const DELETE_HASHTAG = 'DELETE_HASHTAG';
const EDIT_HASHTAG = 'EDIT_HASHTAG';
const ADD_IMAGE = 'ADD_IMAGE';

const initialState = {
    description: '',
    title: '',
    tags: [],
    color: '',
    photo: '',
};

const updateDescription = description => ({ type: UPDATE_DESCRIPTION, payload: description });
const updateTitle = title => ({ type: UPDATE_TITLE, payload: title });
const updateSwitcher = (id, status) => ({ type: UPDATE_SWITCHER, payload: { [id]: status } });
const clearCollection = () => ({ type: CLEAR_COLLECTION });
const addHashTag = tag =>
    ({ type: ADD_HASHTAG, name: tag.result.name, id: tag.result._id });
const deleteHashTag = id => ({ type: DELETE_HASHTAG, payload: id });
const editHashTag = (id, name) => ({ type: EDIT_HASHTAG, payload: { id, name } });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case UPDATE_DESCRIPTION:
        return { ...state, description: action.payload };
    case UPDATE_TITLE:
        return { ...state, title: action.payload };
    case UPDATE_SWITCHER:
        return { ...state, options: { ...state.options, ...action.payload } };
    case ADD_IMAGE: {
        return {
            ...state,
            color: action.color,
            photo: action.photo,
        };
    }
    case ADD_HASHTAG: {
        return {
            ...state,
            tags: [
                ...state.tags,
                { id: action.id, name: action.name },
            ],
        };
    }
    case DELETE_HASHTAG: {
        const filteredArray = state.tags.filter(hashTag =>
            hashTag.id !== action.payload,
        );

        return {
            ...state,
            tags: filteredArray,
        };
    }
    case EDIT_HASHTAG: {
        const update = (items, item) => {
            const editedArray = [].concat(items);
            editedArray[items.findIndex(x => x.id === item.id)] = item;

            return editedArray;
        };

        return {
            ...state,
            tags: update([...state.tags], action.payload),
        };
    }
    case CLEAR_COLLECTION:
        return { ...initialState };
    default:
        return state;
    }
};

export const addImage = data => ({ type: ADD_IMAGE, color: data.color, photo: data.photo });

export const createCollection = (data, token, callback) => (
    postCollection(data, token).then(res => res.json())
        .then(res => callback(res))
);

export const createHashtag = (name, token) => (
    (dispatch) => {
        postHashtagToSaved(name, token).then((result) => {
            dispatch(addHashTag(result.tag));
        });
    }
);

export {
    reducer,
    updateDescription,
    updateTitle,
    updateSwitcher,
    addHashTag,
    deleteHashTag,
    editHashTag,
    clearCollection,
};
