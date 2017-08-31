const OPEN_URL = 'OPEN_URL';
const initialState = {
    url: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case OPEN_URL:
        return { ...state, ...action.payload };
    default:
        return state;
    }
};

const openUrl = data => ({ type: OPEN_URL, payload: data });

const actions = {
    openUrl,
};

export { reducer, actions };
