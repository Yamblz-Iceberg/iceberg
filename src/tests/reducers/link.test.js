import {
    reducer,
    ADD_LINK,
    DELETE_LINK,
    CLEAR_LINK,
    ADD_COMMENT,
    OPEN_LINK,
    PUSH_LINK_TO_COLLECTION,
} from './../../reducers/link.reducer';

const initialState = {
    result: {
        url: '',
        photo: '',
        favicon: '',
        name: '',
    },
    metrics: {
        openTime: null,
        opened: false,
    },
    created: false,
    saved: false,
    liked: false,
    likes: 0,
    description: '',
};

const res = {
    result: {
        url: 'https://habrahabr.ru/company/reactos/blog/337772/',
        favicon: 'https://habrahabr.ru/images/favicons/favicon-16x16.png',
        name: 'ReactOS 0.4.6 доступен для загрузки',
        photo: 'https://habrastorage.org/web/210/dac/bfb/210dacbfb4d74896a79930d43386fea9.jpg',
    },
    metrics: {
        openTime: null,
        opened: false,
    },
    created: true,
    saved: false,
    liked: false,
    likes: 0,
    description: '',
};

const dataWithComment = { ...initialState, description: 'Комментарий' };
const dataWithOpenedFlag = { ...initialState, metrics: { ...initialState.metrics, opened: true } };

describe('link reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {}),
        ).toEqual(initialState);
    });

    it('should handle ADD_LINK', () => {
        expect(
            reducer(initialState, { type: ADD_LINK, payload: res }),
        ).toEqual(res);
    });

    it('should handle DELETE_LINK', () => {
        expect(
            reducer(initialState, { type: DELETE_LINK }),
        ).toEqual(initialState);
    });

    it('should handle CLEAR_LINK', () => {
        expect(
            reducer(initialState, { type: CLEAR_LINK }),
        ).toEqual(initialState);
    });

    it('should handle ADD_COMMENT', () => {
        expect(
            reducer(initialState, { type: ADD_COMMENT, payload: 'Комментарий' }),
        ).toEqual(dataWithComment);
    });

    it('should handle OPEN_LINK', () => {
        expect(
            reducer(initialState, { type: OPEN_LINK }),
        ).toEqual(dataWithOpenedFlag);
    });

    it('should handle PUSH_LINK_TO_COLLECTION', () => {
        expect(
            reducer(initialState, { type: PUSH_LINK_TO_COLLECTION }),
        ).toEqual(initialState);
    });
});
