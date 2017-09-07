const ADD_TAG = 'ADD_TAG';
const DELETE_TAG = 'DELETE_TAG';
const RESET_TAGS = 'RESET_TAGS';

const initialState = {
    tags: [],
};

const addTag = id => ({ type: ADD_TAG, payload: id });
const deleteTag = id => ({ type: DELETE_TAG, payload: id });
const resetTags = () => ({ type: RESET_TAGS });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_TAG:
        return { ...state, tags: [...state.tags, action.payload] };
    case DELETE_TAG: {
        const filteredTags = state.tags.filter(tag => tag !== action.payload);
        return { ...state, tags: filteredTags };
    }
    case RESET_TAGS:
        return { ...initialState };
    default:
        return state;
    }
};

export { reducer, addTag, deleteTag, resetTags };
