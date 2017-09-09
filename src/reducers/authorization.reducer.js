import { postRegisterDemoUser, putLogOut } from '../services/authorization.service';
import { USER_DATA } from '../config';

let initialState = {
    access_token: '',
    expires_in: 3600,
    refresh_token: '',
    token: 'Bearer token',
    token_type: '',
    userId: '',
    userPassword: '',
    firstName: '',
    lastName: '',
};
if (USER_DATA !== null && USER_DATA.access_token.length > 0) {
    initialState = USER_DATA;
}

const ADD_DEMO_USER = 'ADD_DEMO_USER';
const ADD_REAL_USER = 'ADD_REAL_USER';
const LOG_OUT_USER = 'LOG_OUT_USER';

const addDemoUser = res => ({ type: ADD_DEMO_USER, payload: res });
const addRealUser = res => ({ type: ADD_REAL_USER, payload: res });
const logOutUser = () => ({ type: LOG_OUT_USER });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_DEMO_USER:
        return { ...state, ...action.payload };
    case ADD_REAL_USER:
        return { ...state, ...action.payload };
    case LOG_OUT_USER:
        return state;
    default:
        return state;
    }
};

export const registerDemoUser = (userId, userPassword, firstName, lastName, callback) => (
    (dispatch) => {
        postRegisterDemoUser(userId, userPassword, firstName, lastName).then((res) => {
            dispatch(addDemoUser({ ...res, userId, userPassword, firstName, lastName }));
        }).then(() => callback());
    }
);

export const logOut = (token, refreshToken, callback) => (
    (dispatch) => {
        putLogOut(token, refreshToken).then(() => {
            dispatch(logOutUser());
        }).then(() => callback());
    }
);

export { reducer, addRealUser, ADD_REAL_USER };
