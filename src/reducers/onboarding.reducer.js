import { fetchTags, putTags } from '../services/onboarding.service';

const ADD_TAG = 'ADD_TAG';
const DELETE_TAG = 'DELETE_TAG';
const RESET_TAGS = 'RESET_TAGS';
const GET_TAGS = 'GET_TAGS';
const SEND_TAGS = 'SEND_TAGS';

const initialState = {
    selectedTags: [],
    hashTags: [],
};

const addTag = id => ({ type: ADD_TAG, payload: id });
const deleteTag = id => ({ type: DELETE_TAG, payload: id });
const resetTags = () => ({ type: RESET_TAGS });
const sendTags = token => ({ type: SEND_TAGS, payload: token });
const getHashTags = tags => ({ type: GET_TAGS, payload: tags });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_TAG: {
        return { ...state, selectedTags: [...state.selectedTags, action.payload] };
    }
    case DELETE_TAG: {
        const filteredTags = state.selectedTags.filter(tag => tag !== action.payload);
        return { ...state, selectedTags: filteredTags };
    }
    case SEND_TAGS: {
        putTags(state.selectedTags, action.payload);
        return { initialState };
    }
    case RESET_TAGS:
        return { ...state, selectedTags: [] };
    case GET_TAGS:
        return { ...state, hashTags: action.payload };
    default:
        return state;
    }
};

export const getTags = token => (
    (dispatch) => {
        fetchTags(token).then((result) => {
            dispatch(getHashTags(result.tags));
        });
    }
);

export { reducer, addTag, deleteTag, resetTags, sendTags };
