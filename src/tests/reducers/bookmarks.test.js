import { reducer, GET_USER_COLLECTIONS, GET_USER_LINKS } from './../../reducers/bookmarks.reducer';

const initialState = {
    typeToFeed: 'createdCollection',
    collections: [],
    links: [],
};

const mockDataCollection = {
    collections: [
        {
            id: 0,
            description: '',
            photo: '',
            author: {
                firstName: '',
                lastName: '',
                photo: '',
            },
            name: '',
            tags: [],
            links: [],
            savedTimesCount: 0,
            saved: false,
        },
    ],
    type: 'createdCollection',
};

const mockDataLinks = {
    links: [
        {
            id: 0,
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
        },
    ],
    type: 'addedLinks',
};

describe('Тестирование Bookmarks.reducer', () => {
    it('По умолчанию возвращает Initial State', () => {
        expect(
            reducer(undefined, {}),
        ).toEqual(initialState);
    });

    it('GET_USER_COLLECTIONS: данные записываются в поле collections', () => {
        expect(
            reducer(initialState,
                {
                    type: GET_USER_COLLECTIONS,
                    payload: mockDataCollection.collections,
                    typeToFeed: mockDataCollection.type,
                }),
        ).toEqual(
            {
                typeToFeed: mockDataCollection.type,
                collections: mockDataCollection.collections,
                links: [],
            });
    });

    it('GET_USER_LINKS: данные записываются в поле links', () => {
        expect(
            reducer(initialState,
                {
                    type: GET_USER_LINKS,
                    payload: mockDataLinks.links,
                    typeToFeed: mockDataLinks.type,
                }),
        ).toEqual(
            {
                typeToFeed: mockDataLinks.type,
                links: mockDataLinks.links,
                collections: [],
            });
    });
});
