const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';

const initialState = {
    description: '',
};

const updateDescription = description => ({ type: UPDATE_DESCRIPTION, payload: description });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case UPDATE_DESCRIPTION:
        return { ...state, description: action.payload };
    default:
        return state;
    }
};

export { reducer, updateDescription };
