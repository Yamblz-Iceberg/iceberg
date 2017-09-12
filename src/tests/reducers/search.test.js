import { reducer, CHANGE_SEARCH, FETCH_SEARCH_RESULT } from './../../reducers/search.reducer';

const initialState = {
    text: '',
    result: {
        collections: [],
        tags: [],
    },
};

const result = {
    collections: [
        {
            _id: '59b6709e2e031a0012b01ff9',
            name: 'Как испечь торт',
            author: {
                firstName: 'Awesome',
                lastName: 'User',
            },
        },
    ],
    tags: [],
};

describe('search reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {}),
        ).toEqual(initialState);
    });

    it('should handle CHANGE_SEARCH', () => {
        expect(
            reducer(initialState, { type: CHANGE_SEARCH, payload: 'Яндекс — поиск №1 в России' }),
        ).toEqual({
            text: 'Яндекс — поиск №1 в России',
            result: {
                collections: [],
                tags: [],
            },
        });
    });

    it('should handle FETCH_SEARCH_RESULT', () => {
        expect(
            reducer(initialState, { type: FETCH_SEARCH_RESULT, payload: result }),
        ).toEqual({
            text: '',
            result,
        });
    });
});
