import { postCollection, postHashtagToSaved } from './../services/create-collection.service';

const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
const UPDATE_TITLE = 'UPDATE_TITLE';
const UPDATE_SWITCHER = 'UPDATE_SWITCHER';
const CLEAR_COLLECTION = 'CLEAR_COLLECTION';
const ADD_HASHTAG = 'ADD_HASHTAG';
const DELETE_HASHTAG = 'DELETE_HASHTAG';
const EDIT_HASHTAG = 'EDIT_HASHTAG';
const ADD_IMAGE = 'ADD_IMAGE';
const PUT_COLLECTION = 'PUT_COLLECTION';

const initialState = {
    description: '',
    title: '',
    tags: [],
    color: '',
    photo: '',
    closed: false,
};

const updateDescription = description => ({ type: UPDATE_DESCRIPTION, payload: description });
const updateTitle = title => ({ type: UPDATE_TITLE, payload: title });
const updateSwitcher = (name, status) => ({ type: UPDATE_SWITCHER, payload: { [name]: status } });
const clearCollection = () => ({ type: CLEAR_COLLECTION });
const addHashTag = tag =>
    ({ type: ADD_HASHTAG, name: tag.result.name, id: tag.result._id });
const deleteHashTag = id => ({ type: DELETE_HASHTAG, payload: id });
const editHashTag = (id, name) => ({ type: EDIT_HASHTAG, payload: { id, name } });
const putCollection = () => ({ type: PUT_COLLECTION });
const addPhoto = data => ({ type: ADD_IMAGE, color: data.color, photo: data.photo });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case UPDATE_DESCRIPTION:
        return { ...state, description: action.payload };
    case UPDATE_TITLE:
        return { ...state, title: action.payload };
    case UPDATE_SWITCHER:
        return { ...state, ...action.payload };
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
    case PUT_COLLECTION:
        return state;
    case CLEAR_COLLECTION:
        return { ...initialState };
    default:
        return state;
    }
};

const addImage = data => dispatch =>
    dispatch(addPhoto(data));

const createCollection = (data, token, callback) => (
    (dispatch) => {
        dispatch(putCollection());
        postCollection(data, token).then(res => callback(res));
    }
);

const createHashtag = (name, token) => (
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
    addImage,
    createCollection,
    createHashtag,
    UPDATE_DESCRIPTION,
    UPDATE_TITLE,
    UPDATE_SWITCHER,
    ADD_IMAGE,
    ADD_HASHTAG,
    DELETE_HASHTAG,
    EDIT_HASHTAG,
    PUT_COLLECTION,
    CLEAR_COLLECTION,
};
