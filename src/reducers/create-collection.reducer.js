const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
const UPDATE_TITLE = 'UPDATE_TITLE';

const initialState = {
    description: '',
    title: '',
};

const updateDescription = description => ({ type: UPDATE_DESCRIPTION, payload: description });

const updateTitle = title => ({ type: UPDATE_TITLE, payload: title });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case UPDATE_DESCRIPTION:
        return { ...state, description: action.payload };
    case UPDATE_TITLE:
        return { ...state, title: action.payload };
    default:
        return state;
    }
};

export { reducer, updateDescription, updateTitle };
