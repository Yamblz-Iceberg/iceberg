const CHANGE_SEARCH = 'CHANGE_SEARCH';

const initialState = {
    text: '',
    result: {},
};

const changeSearch = text => ({ type: CHANGE_SEARCH, payload: text });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_SEARCH:
        return { ...state, text: action.payload };
    default:
        return state;
    }
};

const actions = {
    changeSearch,
};

export { reducer, actions };
