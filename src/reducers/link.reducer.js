const OPEN_URL = 'OPEN_URL';
const CLOSE_URL = 'CLOSE_URL';
const initialState = {
    url: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case OPEN_URL:
        return { ...state, ...action.payload };
    case CLOSE_URL:
        return initialState;
    default:
        return state;
    }
};

const openUrl = data => ({ type: OPEN_URL, payload: data });
const closeUrl = () => ({ type: CLOSE_URL });

const actions = {
    openUrl,
    closeUrl,
};

export { reducer, actions };
