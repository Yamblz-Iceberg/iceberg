import {
    reducer,
    ADD_TAG,
    GET_TAGS,
    SEND_TAGS,
    DELETE_TAG,
} from './../../reducers/onboarding.reducer';

const initialState = {
    selectedTags: [],
    hashTags: [],
};

const tags = [
    {
        _id: '59b28d3217b57b0012086184',
        name: 'искусство',
    },
    {
        _id: '59b28d4d17b57b0012086187',
        name: 'советы',
    },
    {
        _id: '59b28f7e17b57b00120861a7',
        name: 'программирование',
    },
];

const selectedTags = [
    '59b28d3217b57b0012086184',
    '59b28d4d17b57b0012086187',
    '59b28f7e17b57b00120861a7',
];

describe('onboarding reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {}),
        ).toEqual(initialState);
    });

    it('should handle GET_TAGS', () => {
        expect(
            reducer(initialState, { type: GET_TAGS, payload: tags }),
        ).toEqual({ ...initialState, hashTags: tags });
    });

    it('should handle ADD_TAG', () => {
        expect(
            reducer(initialState, { type: ADD_TAG, payload: '59b2907417b57b00120861bf' }),
        ).toEqual({ ...initialState, selectedTags: ['59b2907417b57b00120861bf'] });
    });

    it('should handle SEND_TAGS', () => {
        expect(
            reducer({ ...initialState, hashTags: tags, selectedTags }, { type: SEND_TAGS }),
        ).toEqual(initialState);
    });

    it('should handle DELETE_TAG', () => {
        expect(
            reducer({ ...initialState, selectedTags }, { type: DELETE_TAG, payload: '59b28d3217b57b0012086184' }),
        ).toEqual({
            selectedTags: [
                '59b28d4d17b57b0012086187',
                '59b28f7e17b57b00120861a7',
            ],
            hashTags: [],
        });
    });
});
