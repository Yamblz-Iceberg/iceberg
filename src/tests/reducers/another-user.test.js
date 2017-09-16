import { reducer, FETCH_ANOTHER_USER, FETCH_ANOTHER_USER_COLLECTIONS } from '../../reducers/another-user.reducer';

describe('another-user reducer', () => {
    const initialState = {
        data: {},
        collections: [],
    };

    it('should return initial state', () => {
        expect(
            reducer(undefined, {}),
        ).toEqual(initialState);
    });

    it('should handle FETCH_ANOTHER_USER', () => {
        const anotherUserData = {
            _id: '59b2924c17b57b00120861dd',
            userId: 'vk_24086084',
            firstName: 'Игорь',
            lastName: 'Володин',
            photo: 'https://pp.userapi.com/c637519/v637519084/16633/QahseiLhR6g.jpg',
            sex: 'male',
            socialLink: 'http://vk.com/igorvolodin',
            personalTags: [],
            createdCollections: [
                {
                    opened: false,
                    addTime: '2017-09-08T12:55:12.930Z',
                    counter: 0,
                    _id: '59b2933017b57b00120861ef',
                    bookmarkId: '59b2933017b57b00120861ee',
                },
            ],
            savedCollections: [
                {
                    opened: false,
                    addTime: '2017-09-08T13:57:09.366Z',
                    counter: 0,
                    _id: '59b2a1b517b57b001208632f',
                    bookmarkId: '59b2933017b57b00120861ee',
                },
            ],
            addedLinks: [
                {
                    opened: false,
                    addTime: '2017-09-08T12:57:11.951Z',
                    counter: 0,
                    _id: '59b293a717b57b00120861f7',
                    bookmarkId: '59b293a717b57b00120861f6',
                },
            ],
            banned: false,
            created: '2017-09-08T12:51:24.108Z',
            rating: 5,
            accType: 'user',
        };
        expect(
            reducer(undefined, { type: FETCH_ANOTHER_USER, payload: anotherUserData }),
        ).toEqual({
            ...initialState, data: anotherUserData,
        });
    });

    it('should handle FETCH_ANOTHER_USER_COLLECTIONS', () => {
        const anotherUserCollection = [
            {
                _id: '59b87833d3fb4b001242b066',
                name: 'Статические анализаторы регулярных выражений',
                author: {
                    userId: 'vk_24086084',
                    firstName: 'Игорь',
                    lastName: 'Володин',
                    photo: 'https://pp.userapi.com/c637519/v637519084/16633/QahseiLhR6g.jpg',
                    rating: 5,
                    personalTags: [],
                    createdCollections: [
                        {
                            bookmarkId: '59b2933017b57b00120861ee',
                            _id: '59b2933017b57b00120861ef',
                            counter: 0,
                            addTime: '2017-09-08T12:55:12.930Z',
                            opened: false,
                        },
                    ],
                    savedCollections: [
                        {
                            bookmarkId: '59b2933017b57b00120861ee',
                            _id: '59b2a1b517b57b001208632f',
                            counter: 0,
                            addTime: '2017-09-08T13:57:09.366Z',
                            opened: false,
                        },
                    ],
                    addedLinks: [
                        {
                            bookmarkId: '59b293a717b57b00120861f6',
                            _id: '59b293a717b57b00120861f7',
                            counter: 0,
                            addTime: '2017-09-08T12:57:11.951Z',
                            opened: false,
                        },
                    ],
                    savedLinks: [],
                },
                photo: 'https://storage.googleapis.com/iceberg-cfa80.appspot.com/images/6c6847f9-35e1-4380-a91c-f1adc9f5b980.jpeg',
                color: 'rgb(231, 228, 206)',
                created: '2017-09-13T00:13:39.159Z',
                metrics: null,
                closed: false,
                linksCount: 8,
            },
        ];
        expect(
            reducer(undefined,
                { type: FETCH_ANOTHER_USER_COLLECTIONS, payload: anotherUserCollection }),
        ).toEqual({
            ...initialState, collections: anotherUserCollection,
        });
    });
});
