import {
    reducer,
    CHANGE_LIKED_STATUS_BY_ID,
    CHANGE_LINK_OPENED_STATUS_BY_ID,
    CHANGE_LINK_SAVED_STATUS_BY_ID,
    CHANGE_SAVED_STATUS,
    CLEAR_COLLECTION,
    FETCH_COLLECTION,
    REMOVE_COLLECTION,
    REMOVE_FROM_COLLECTION,
} from '../../reducers/collection.reducer';
import {
    setLinkAsOpenInList, updateLikeStatusOfLinkInList,
    updateSavedStatusOfLinkInList,
} from '../../utils/shared-functions';

describe('collection reducer', () => {
    const initialState = {
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
    };

    it('should return initial state', () => {
        expect(
            reducer(undefined, {}),
        ).toEqual(initialState);
    });

    it('should handle FETCH_COLLECTION', () => {
        const collection = {
            description: 'Ни для кого не секрет, что регулярные выражения — очень удобный инструмент для решения многих задач, связанных с обработкой текста. Но вряд ли найдется много людей, способных написать любую регулярку с нуля без подсказок, справочников и нескольких (десятков) попыток. ',
            photo: 'https://storage.googleapis.com/iceberg-cfa80.appspot.com/images/6c6847f9-35e1-4380-a91c-f1adc9f5b980.jpeg',
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
                savedLinks: [],
                accType: 'user',
            },
            name: 'Статические анализаторы регулярных выражений',
            tags: [
                {
                    _id: '59b28f7e17b57b00120861a7',
                    name: 'программирование',
                },
            ],
            links: [
                {
                    _id: '59b87aa6d3fb4b001242b07a',
                    userAdded: {
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
                },
            ],
            savedTimesCount: 0,
            saved: false,
            _id: '59b87833d3fb4b001242b066',
            color: 'rgb(231, 228, 206)',
            closed: false,
        };
        expect(
            reducer(undefined, { type: FETCH_COLLECTION, payload: collection }),
        ).toEqual({
            ...initialState, ...collection,
        });
    });

    it('should handle REMOVE_COLLECTION', () => {
        expect(
            reducer(undefined, { type: REMOVE_COLLECTION }),
        ).toEqual({
            ...initialState,
        });
    });

    it('should handle CHANGE_SAVED_STATUS', () => {
        const status = true;
        expect(
            reducer(undefined, { type: CHANGE_SAVED_STATUS, payload: status }),
        ).toEqual({
            ...initialState,
            saved: status,
            savedTimesCount: initialState.savedTimesCount + (status ? 1 : -1),
        });
    });

    it('should handle CHANGE_LIKED_STATUS_BY_ID', () => {
        const id = '59b87833d3fb4b001242b066';
        const status = true;
        const linksArray = [{
            _id: id,
            liked: false,
            likes: 0,
        }];
        const state = { ...initialState, links: linksArray };
        expect(
            reducer({ ...state }, { type: CHANGE_LIKED_STATUS_BY_ID, id, status }),
        ).toEqual({
            ...state,
            links: updateLikeStatusOfLinkInList([...state.links], id, status),
        });
    });

    it('should handle CHANGE_LINK_SAVED_STATUS_BY_ID', () => {
        const id = '59b87833d3fb4b001242b066';
        const status = true;
        const linksArray = [{
            _id: id,
            saved: false,
            savedTimesCount: 0,
        }];
        const state = { ...initialState, links: linksArray };
        expect(
            reducer({ ...state }, { type: CHANGE_LINK_SAVED_STATUS_BY_ID, id, status }),
        ).toEqual({
            ...state,
            links: updateSavedStatusOfLinkInList([...state.links], id, status),
        });
    });

    it('should handle CHANGE_LINK_OPENED_STATUS_BY_ID', () => {
        const id = '59b87833d3fb4b001242b066';
        const linksArray = [{
            _id: id,
            opened: false,
        }];
        const state = { ...initialState, links: linksArray };
        expect(
            reducer({ ...state }, { type: CHANGE_LINK_OPENED_STATUS_BY_ID, id }),
        ).toEqual({
            ...state,
            links: setLinkAsOpenInList([...state.links], id),
        });
    });

    it('should handle REMOVE_FROM_COLLECTION', () => {
        const id = '59b87833d3fb4b001242b066';
        const linksArray = [{
            _id: id,
        }];
        const state = { ...initialState, links: linksArray };
        expect(
            reducer({ ...state }, { type: REMOVE_FROM_COLLECTION, id }),
        ).toEqual({
            ...state,
            links: state.links.filter(x => x._id !== id),
        });
    });

    it('should handle CLEAR_COLLECTION', () => {
        expect(
            reducer(undefined, { type: CLEAR_COLLECTION }),
        ).toEqual({ ...initialState });
    });
});
