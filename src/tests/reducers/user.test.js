import { reducer, FETCH_USER } from './../../reducers/user.reducer';

const initialState = {
    data: {},
};

const data = {
    firstName: 'Awesome',
    lastName: 'User',
    banned: false,
};

describe('user reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {}),
        ).toEqual(initialState);
    });

    it('should handle FETCH_USER', () => {
        expect(
            reducer(initialState, { type: FETCH_USER, payload: data }),
        ).toEqual({ data });
    });
});
