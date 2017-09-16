import { ADD_DEMO_USER, ADD_REAL_USER, reducer } from '../../reducers/authorization.reducer';

describe('authorization reducer', () => {
    const initialState = {
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

    it('should return initial state', () => {
        expect(
            reducer(undefined, {}),
        ).toEqual(initialState);
    });

    it('should handle ADD_DEMO_USER', () => {
        const demoUserData = {
            access_token: '9c7fa30d8e5129cc06b02f89282d5c84fb836ec7b565da9f9400378f74c75cb8',
            expires_in: 86400,
            refresh_token: 'd03abfb8f33a26cac68af081e01520640afe7339c07ed63270686a3c2b1ada69',
            token: 'Bearer token',
            token_type: 'Bearer',
            userId: '796a658b-5b89-bb5b-a145-2a76',
            userPassword: 'bea86352-34a3-7a74-a29f-bb0a',
            firstName: 'Демо',
            lastName: 'Пользователь',
        };
        expect(
            reducer(undefined, { type: ADD_DEMO_USER, payload: demoUserData }),
        ).toEqual({
            ...demoUserData,
        });
    });

    it('should handle ADD_REAL_USER', () => {
        const realUserData = {
            access_token: '02c51b6250d3807119dcef8d1ebbdd53959d7300f4400e26fd9e4d9dd931b3e1',
            refresh_token: '71f5c63bc931943cb7c22ad204ab57c90dccaaafd3d051e1affa400500b12d93',
            expires_in: 86400,
            token_type: 'Bearer',
        };
        expect(
            reducer(undefined, { type: ADD_REAL_USER, payload: realUserData }),
        ).toEqual({
            ...initialState, ...realUserData,
        });
    });
});
