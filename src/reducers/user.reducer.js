import { fetchUser } from '../services/user.service';

const FETCH_USER = 'FETCH_USER';

const initialState = {
    user: {},
};

const loadUser = data => ({ type: FETCH_USER, payload: data });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_USER:
        return { user: action.payload };
    default:
        return state;
    }
};


const userLoader = token => (
    (dispatch) => {
        fetchUser(token).then((data) => {
            dispatch(loadUser(data));
        });
    }
);

export { reducer, userLoader };
