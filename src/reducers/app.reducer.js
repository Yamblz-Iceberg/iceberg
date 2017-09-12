let initialState = {
    authInProgress: false,
};

const authInProgress = localStorage.getItem('authInProgress');
if (authInProgress) {
    initialState = { ...initialState, ...{ authInProgress: JSON.parse(authInProgress) } };
}

export const START_AUTH = 'START_AUTH';
export const STOP_AUTH = 'STOP_AUTH';

const authStarts = () => ({ type: START_AUTH, payload: true });
const authStops = () => ({ type: STOP_AUTH, payload: false });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case START_AUTH:
        return { ...state, authInProgress: action.payload };
    case STOP_AUTH:
        return { ...state, authInProgress: action.payload };
    default:
        return state;
    }
};

const startAuth = () => (
    (dispatch) => {
        localStorage.setItem('authInProgress', true);
        dispatch(authStarts());
    }
);

const stopAuth = () => (
    (dispatch) => {
        localStorage.setItem('authInProgress', false);
        dispatch(authStops());
    }
);

export { reducer, startAuth, stopAuth };
