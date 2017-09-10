import { fetchUser } from '../services/another-user.service';

const FETCH_ANOTHER_USER = 'FETCH_ANOTHER_USER';

const initialState = {
    data: {},
    typeToFeed: 'hisCollection',
    archive: {
        collections: [],
        links: [],
    },
};

const loadUser = data => ({ type: FETCH_ANOTHER_USER, payload: data });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_ANOTHER_USER:
        return { ...state, data: action.payload };
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

export {
    reducer,
    userLoader,
};
