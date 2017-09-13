import { reducer, FETCH_ANOTHER_USER, FETCH_ANOTHER_USER_COLLECTIONS } from '../../reducers/another-user.reducer';

/* eslint-disable */
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
                    bookmarkId: '59b2933017b57b00120861ee'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:09:07.636Z',
                    counter: 0,
                    _id: '59b2967317b57b0012086241',
                    bookmarkId: '59b2967317b57b0012086240'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:16:05.870Z',
                    counter: 0,
                    _id: '59b2981517b57b001208627b',
                    bookmarkId: '59b2981517b57b001208627a'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:29:28.779Z',
                    counter: 0,
                    _id: '59b29b3817b57b00120862ee',
                    bookmarkId: '59b29b3817b57b00120862ed'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:33:41.426Z',
                    counter: 0,
                    _id: '59b29c3517b57b0012086310',
                    bookmarkId: '59b29c3517b57b001208630f'
                }
            ],
                savedCollections: [
                {
                    opened: false,
                    addTime: '2017-09-08T13:57:09.366Z',
                    counter: 0,
                    _id: '59b2a1b517b57b001208632f',
                    bookmarkId: '59b2933017b57b00120861ee'
                }
            ],
                addedLinks: [
                {
                    opened: false,
                    addTime: '2017-09-08T12:57:11.951Z',
                    counter: 0,
                    _id: '59b293a717b57b00120861f7',
                    bookmarkId: '59b293a717b57b00120861f6'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T12:57:51.573Z',
                    counter: 0,
                    _id: '59b293cf17b57b00120861f9',
                    bookmarkId: '59b293cf17b57b00120861f8'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T12:58:16.076Z',
                    counter: 0,
                    _id: '59b293e817b57b00120861fd',
                    bookmarkId: '59b293e817b57b00120861fc'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T12:58:37.285Z',
                    counter: 0,
                    _id: '59b293fd17b57b0012086202',
                    bookmarkId: '59b293fd17b57b0012086201'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T12:58:58.556Z',
                    counter: 0,
                    _id: '59b2941217b57b0012086206',
                    bookmarkId: '59b2941217b57b0012086205'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T12:59:22.189Z',
                    counter: 0,
                    _id: '59b2942a17b57b0012086208',
                    bookmarkId: '59b2942a17b57b0012086207'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:09:29.101Z',
                    counter: 0,
                    _id: '59b2968917b57b0012086243',
                    bookmarkId: '59b2968917b57b0012086242'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:09:47.189Z',
                    counter: 0,
                    _id: '59b2969b17b57b0012086249',
                    bookmarkId: '59b2969b17b57b0012086248'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:10:07.289Z',
                    counter: 0,
                    _id: '59b296af17b57b001208624d',
                    bookmarkId: '59b296af17b57b001208624c'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:10:35.861Z',
                    counter: 0,
                    _id: '59b296cb17b57b0012086251',
                    bookmarkId: '59b296cb17b57b0012086250'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:10:58.819Z',
                    counter: 0,
                    _id: '59b296e217b57b0012086255',
                    bookmarkId: '59b296e217b57b0012086254'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:16:35.652Z',
                    counter: 0,
                    _id: '59b2983317b57b001208627f',
                    bookmarkId: '59b2983317b57b001208627e'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:18:05.157Z',
                    counter: 0,
                    _id: '59b2988d17b57b0012086289',
                    bookmarkId: '59b2988d17b57b0012086288'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:18:52.088Z',
                    counter: 0,
                    _id: '59b298bc17b57b001208628e',
                    bookmarkId: '59b298bc17b57b001208628d'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:19:28.205Z',
                    counter: 0,
                    _id: '59b298e017b57b0012086292',
                    bookmarkId: '59b298e017b57b0012086291'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:20:39.054Z',
                    counter: 0,
                    _id: '59b2992717b57b001208629c',
                    bookmarkId: '59b2992717b57b001208629b'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:21:53.929Z',
                    counter: 0,
                    _id: '59b2997117b57b00120862a2',
                    bookmarkId: '59b2997117b57b00120862a1'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:22:41.680Z',
                    counter: 0,
                    _id: '59b299a117b57b00120862a7',
                    bookmarkId: '59b299a117b57b00120862a6'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:23:48.951Z',
                    counter: 0,
                    _id: '59b299e417b57b00120862b1',
                    bookmarkId: '59b299e417b57b00120862b0'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:24:32.360Z',
                    counter: 0,
                    _id: '59b29a1017b57b00120862be',
                    bookmarkId: '59b29a1017b57b00120862bd'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:25:08.759Z',
                    counter: 0,
                    _id: '59b29a3417b57b00120862c8',
                    bookmarkId: '59b29a3417b57b00120862c7'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:26:16.755Z',
                    counter: 0,
                    _id: '59b29a7817b57b00120862d5',
                    bookmarkId: '59b29a7817b57b00120862d4'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:27:12.401Z',
                    counter: 0,
                    _id: '59b29ab017b57b00120862dd',
                    bookmarkId: '59b29ab017b57b00120862dc'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:29:47.626Z',
                    counter: 0,
                    _id: '59b29b4b17b57b00120862f0',
                    bookmarkId: '59b29b4b17b57b00120862ef'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:30:20.789Z',
                    counter: 0,
                    _id: '59b29b6c17b57b00120862f8',
                    bookmarkId: '59b29b6c17b57b00120862f7'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:30:38.946Z',
                    counter: 0,
                    _id: '59b29b7e17b57b00120862fe',
                    bookmarkId: '59b29b7e17b57b00120862fd'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:30:55.215Z',
                    counter: 0,
                    _id: '59b29b8f17b57b0012086302',
                    bookmarkId: '59b29b8f17b57b0012086301'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:31:15.886Z',
                    counter: 0,
                    _id: '59b29ba317b57b0012086304',
                    bookmarkId: '59b29ba317b57b0012086303'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:34:02.354Z',
                    counter: 0,
                    _id: '59b29c4a17b57b0012086312',
                    bookmarkId: '59b29c4a17b57b0012086311'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:34:20.127Z',
                    counter: 0,
                    _id: '59b29c5c17b57b0012086314',
                    bookmarkId: '59b29c5c17b57b0012086313'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:34:51.713Z',
                    counter: 0,
                    _id: '59b29c7b17b57b0012086316',
                    bookmarkId: '59b29c7b17b57b0012086315'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:35:33.583Z',
                    counter: 0,
                    _id: '59b29ca517b57b0012086318',
                    bookmarkId: '59b29ca517b57b0012086317'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:35:52.627Z',
                    counter: 0,
                    _id: '59b29cb817b57b001208631a',
                    bookmarkId: '59b29cb817b57b0012086319'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:36:08.315Z',
                    counter: 0,
                    _id: '59b29cc817b57b001208631c',
                    bookmarkId: '59b29cc817b57b001208631b'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:36:32.354Z',
                    counter: 0,
                    _id: '59b29ce017b57b001208631e',
                    bookmarkId: '59b29ce017b57b001208631d'
                },
                {
                    opened: false,
                    addTime: '2017-09-08T13:37:05.039Z',
                    counter: 0,
                    _id: '59b29d0117b57b0012086320',
                    bookmarkId: '59b29d0117b57b001208631f'
                }
            ],
                banned: false,
                created: '2017-09-08T12:51:24.108Z',
                rating: 5,
                accType: 'user'
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
                        {
                            bookmarkId: '59b2967317b57b0012086240',
                            _id: '59b2967317b57b0012086241',
                            counter: 0,
                            addTime: '2017-09-08T13:09:07.636Z',
                            opened: false,
                        },
                        {
                            bookmarkId: '59b2981517b57b001208627a',
                            _id: '59b2981517b57b001208627b',
                            counter: 0,
                            addTime: '2017-09-08T13:16:05.870Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29b3817b57b00120862ed',
                            _id: '59b29b3817b57b00120862ee',
                            counter: 0,
                            addTime: '2017-09-08T13:29:28.779Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29c3517b57b001208630f',
                            _id: '59b29c3517b57b0012086310',
                            counter: 0,
                            addTime: '2017-09-08T13:33:41.426Z',
                            opened: false
                        }
                    ],
                    savedCollections: [
                        {
                            bookmarkId: '59b2933017b57b00120861ee',
                            _id: '59b2a1b517b57b001208632f',
                            counter: 0,
                            addTime: '2017-09-08T13:57:09.366Z',
                            opened: false
                        }
                    ],
                    addedLinks: [
                        {
                            bookmarkId: '59b293a717b57b00120861f6',
                            _id: '59b293a717b57b00120861f7',
                            counter: 0,
                            addTime: '2017-09-08T12:57:11.951Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b293cf17b57b00120861f8',
                            _id: '59b293cf17b57b00120861f9',
                            counter: 0,
                            addTime: '2017-09-08T12:57:51.573Z',
                            opened: false,
                        },
                        {
                            bookmarkId: '59b293e817b57b00120861fc',
                            _id: '59b293e817b57b00120861fd',
                            counter: 0,
                            addTime: '2017-09-08T12:58:16.076Z',
                            opened: false,
                        },
                        {
                            bookmarkId: '59b293fd17b57b0012086201',
                            _id: '59b293fd17b57b0012086202',
                            counter: 0,
                            addTime: '2017-09-08T12:58:37.285Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b2941217b57b0012086205',
                            _id: '59b2941217b57b0012086206',
                            counter: 0,
                            addTime: '2017-09-08T12:58:58.556Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b2942a17b57b0012086207',
                            _id: '59b2942a17b57b0012086208',
                            counter: 0,
                            addTime: '2017-09-08T12:59:22.189Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b2968917b57b0012086242',
                            _id: '59b2968917b57b0012086243',
                            counter: 0,
                            addTime: '2017-09-08T13:09:29.101Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b2969b17b57b0012086248',
                            _id: '59b2969b17b57b0012086249',
                            counter: 0,
                            addTime: '2017-09-08T13:09:47.189Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b296af17b57b001208624c',
                            _id: '59b296af17b57b001208624d',
                            counter: 0,
                            addTime: '2017-09-08T13:10:07.289Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b296cb17b57b0012086250',
                            _id: '59b296cb17b57b0012086251',
                            counter: 0,
                            addTime: '2017-09-08T13:10:35.861Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b296e217b57b0012086254',
                            _id: '59b296e217b57b0012086255',
                            counter: 0,
                            addTime: '2017-09-08T13:10:58.819Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b2983317b57b001208627e',
                            _id: '59b2983317b57b001208627f',
                            counter: 0,
                            addTime: '2017-09-08T13:16:35.652Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b2988d17b57b0012086288',
                            _id: '59b2988d17b57b0012086289',
                            counter: 0,
                            addTime: '2017-09-08T13:18:05.157Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b298bc17b57b001208628d',
                            _id: '59b298bc17b57b001208628e',
                            counter: 0,
                            addTime: '2017-09-08T13:18:52.088Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b298e017b57b0012086291',
                            _id: '59b298e017b57b0012086292',
                            counter: 0,
                            addTime: '2017-09-08T13:19:28.205Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b2992717b57b001208629b',
                            _id: '59b2992717b57b001208629c',
                            counter: 0,
                            addTime: '2017-09-08T13:20:39.054Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b2997117b57b00120862a1',
                            _id: '59b2997117b57b00120862a2',
                            counter: 0,
                            addTime: '2017-09-08T13:21:53.929Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b299a117b57b00120862a6',
                            _id: '59b299a117b57b00120862a7',
                            counter: 0,
                            addTime: '2017-09-08T13:22:41.680Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b299e417b57b00120862b0',
                            _id: '59b299e417b57b00120862b1',
                            counter: 0,
                            addTime: '2017-09-08T13:23:48.951Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29a1017b57b00120862bd',
                            _id: '59b29a1017b57b00120862be',
                            counter: 0,
                            addTime: '2017-09-08T13:24:32.360Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29a3417b57b00120862c7',
                            _id: '59b29a3417b57b00120862c8',
                            counter: 0,
                            addTime: '2017-09-08T13:25:08.759Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29a7817b57b00120862d4',
                            _id: '59b29a7817b57b00120862d5',
                            counter: 0,
                            addTime: '2017-09-08T13:26:16.755Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29ab017b57b00120862dc',
                            _id: '59b29ab017b57b00120862dd',
                            counter: 0,
                            addTime: '2017-09-08T13:27:12.401Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29b4b17b57b00120862ef',
                            _id: '59b29b4b17b57b00120862f0',
                            counter: 0,
                            addTime: '2017-09-08T13:29:47.626Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29b6c17b57b00120862f7',
                            _id: '59b29b6c17b57b00120862f8',
                            counter: 0,
                            addTime: '2017-09-08T13:30:20.789Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29b7e17b57b00120862fd',
                            _id: '59b29b7e17b57b00120862fe',
                            counter: 0,
                            addTime: '2017-09-08T13:30:38.946Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29b8f17b57b0012086301',
                            _id: '59b29b8f17b57b0012086302',
                            counter: 0,
                            addTime: '2017-09-08T13:30:55.215Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29ba317b57b0012086303',
                            _id: '59b29ba317b57b0012086304',
                            counter: 0,
                            addTime: '2017-09-08T13:31:15.886Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29c4a17b57b0012086311',
                            _id: '59b29c4a17b57b0012086312',
                            counter: 0,
                            addTime: '2017-09-08T13:34:02.354Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29c5c17b57b0012086313',
                            _id: '59b29c5c17b57b0012086314',
                            counter: 0,
                            addTime: '2017-09-08T13:34:20.127Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29c7b17b57b0012086315',
                            _id: '59b29c7b17b57b0012086316',
                            counter: 0,
                            addTime: '2017-09-08T13:34:51.713Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29ca517b57b0012086317',
                            _id: '59b29ca517b57b0012086318',
                            counter: 0,
                            addTime: '2017-09-08T13:35:33.583Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29cb817b57b0012086319',
                            _id: '59b29cb817b57b001208631a',
                            counter: 0,
                            addTime: '2017-09-08T13:35:52.627Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29cc817b57b001208631b',
                            _id: '59b29cc817b57b001208631c',
                            counter: 0,
                            addTime: '2017-09-08T13:36:08.315Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29ce017b57b001208631d',
                            _id: '59b29ce017b57b001208631e',
                            counter: 0,
                            addTime: '2017-09-08T13:36:32.354Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29d0117b57b001208631f',
                            _id: '59b29d0117b57b0012086320',
                            counter: 0,
                            addTime: '2017-09-08T13:37:05.039Z',
                            opened: false
                        }
                    ],
                    savedLinks: []
                },
                photo: 'https://storage.googleapis.com/iceberg-cfa80.appspot.com/images/6c6847f9-35e1-4380-a91c-f1adc9f5b980.jpeg',
                color: 'rgb(231, 228, 206)',
                created: '2017-09-13T00:13:39.159Z',
                metrics: null,
                closed: false,
                linksCount: 8
            },
            {
                _id: '59b866956e05400012585d9d',
                name: 'Как оживить свой сайт - инструменты для анимации',
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
                            opened: false
                        },
                        {
                            bookmarkId: '59b2967317b57b0012086240',
                            _id: '59b2967317b57b0012086241',
                            counter: 0,
                            addTime: '2017-09-08T13:09:07.636Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b2981517b57b001208627a',
                            _id: '59b2981517b57b001208627b',
                            counter: 0,
                            addTime: '2017-09-08T13:16:05.870Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29b3817b57b00120862ed',
                            _id: '59b29b3817b57b00120862ee',
                            counter: 0,
                            addTime: '2017-09-08T13:29:28.779Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29c3517b57b001208630f',
                            _id: '59b29c3517b57b0012086310',
                            counter: 0,
                            addTime: '2017-09-08T13:33:41.426Z',
                            opened: false
                        }
                    ],
                    savedCollections: [
                        {
                            bookmarkId: '59b2933017b57b00120861ee',
                            _id: '59b2a1b517b57b001208632f',
                            counter: 0,
                            addTime: '2017-09-08T13:57:09.366Z',
                            opened: false
                        }
                    ],
                    addedLinks: [
                        {
                            bookmarkId: '59b293a717b57b00120861f6',
                            _id: '59b293a717b57b00120861f7',
                            counter: 0,
                            addTime: '2017-09-08T12:57:11.951Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b293cf17b57b00120861f8',
                            _id: '59b293cf17b57b00120861f9',
                            counter: 0,
                            addTime: '2017-09-08T12:57:51.573Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b293e817b57b00120861fc',
                            _id: '59b293e817b57b00120861fd',
                            counter: 0,
                            addTime: '2017-09-08T12:58:16.076Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b293fd17b57b0012086201',
                            _id: '59b293fd17b57b0012086202',
                            counter: 0,
                            addTime: '2017-09-08T12:58:37.285Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b2941217b57b0012086205',
                            _id: '59b2941217b57b0012086206',
                            counter: 0,
                            addTime: '2017-09-08T12:58:58.556Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b2942a17b57b0012086207',
                            _id: '59b2942a17b57b0012086208',
                            counter: 0,
                            addTime: '2017-09-08T12:59:22.189Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b2968917b57b0012086242',
                            _id: '59b2968917b57b0012086243',
                            counter: 0,
                            addTime: '2017-09-08T13:09:29.101Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b2969b17b57b0012086248',
                            _id: '59b2969b17b57b0012086249',
                            counter: 0,
                            addTime: '2017-09-08T13:09:47.189Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b296af17b57b001208624c',
                            _id: '59b296af17b57b001208624d',
                            counter: 0,
                            addTime: '2017-09-08T13:10:07.289Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b296cb17b57b0012086250',
                            _id: '59b296cb17b57b0012086251',
                            counter: 0,
                            addTime: '2017-09-08T13:10:35.861Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b296e217b57b0012086254',
                            _id: '59b296e217b57b0012086255',
                            counter: 0,
                            addTime: '2017-09-08T13:10:58.819Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b2983317b57b001208627e',
                            _id: '59b2983317b57b001208627f',
                            counter: 0,
                            addTime: '2017-09-08T13:16:35.652Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b2988d17b57b0012086288',
                            _id: '59b2988d17b57b0012086289',
                            counter: 0,
                            addTime: '2017-09-08T13:18:05.157Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b298bc17b57b001208628d',
                            _id: '59b298bc17b57b001208628e',
                            counter: 0,
                            addTime: '2017-09-08T13:18:52.088Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b298e017b57b0012086291',
                            _id: '59b298e017b57b0012086292',
                            counter: 0,
                            addTime: '2017-09-08T13:19:28.205Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b2992717b57b001208629b',
                            _id: '59b2992717b57b001208629c',
                            counter: 0,
                            addTime: '2017-09-08T13:20:39.054Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b2997117b57b00120862a1',
                            _id: '59b2997117b57b00120862a2',
                            counter: 0,
                            addTime: '2017-09-08T13:21:53.929Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b299a117b57b00120862a6',
                            _id: '59b299a117b57b00120862a7',
                            counter: 0,
                            addTime: '2017-09-08T13:22:41.680Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b299e417b57b00120862b0',
                            _id: '59b299e417b57b00120862b1',
                            counter: 0,
                            addTime: '2017-09-08T13:23:48.951Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29a1017b57b00120862bd',
                            _id: '59b29a1017b57b00120862be',
                            counter: 0,
                            addTime: '2017-09-08T13:24:32.360Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29a3417b57b00120862c7',
                            _id: '59b29a3417b57b00120862c8',
                            counter: 0,
                            addTime: '2017-09-08T13:25:08.759Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29a7817b57b00120862d4',
                            _id: '59b29a7817b57b00120862d5',
                            counter: 0,
                            addTime: '2017-09-08T13:26:16.755Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29ab017b57b00120862dc',
                            _id: '59b29ab017b57b00120862dd',
                            counter: 0,
                            addTime: '2017-09-08T13:27:12.401Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29b4b17b57b00120862ef',
                            _id: '59b29b4b17b57b00120862f0',
                            counter: 0,
                            addTime: '2017-09-08T13:29:47.626Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29b6c17b57b00120862f7',
                            _id: '59b29b6c17b57b00120862f8',
                            counter: 0,
                            addTime: '2017-09-08T13:30:20.789Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29b7e17b57b00120862fd',
                            _id: '59b29b7e17b57b00120862fe',
                            counter: 0,
                            addTime: '2017-09-08T13:30:38.946Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29b8f17b57b0012086301',
                            _id: '59b29b8f17b57b0012086302',
                            counter: 0,
                            addTime: '2017-09-08T13:30:55.215Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29ba317b57b0012086303',
                            _id: '59b29ba317b57b0012086304',
                            counter: 0,
                            addTime: '2017-09-08T13:31:15.886Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29c4a17b57b0012086311',
                            _id: '59b29c4a17b57b0012086312',
                            counter: 0,
                            addTime: '2017-09-08T13:34:02.354Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29c5c17b57b0012086313',
                            _id: '59b29c5c17b57b0012086314',
                            counter: 0,
                            addTime: '2017-09-08T13:34:20.127Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29c7b17b57b0012086315',
                            _id: '59b29c7b17b57b0012086316',
                            counter: 0,
                            addTime: '2017-09-08T13:34:51.713Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29ca517b57b0012086317',
                            _id: '59b29ca517b57b0012086318',
                            counter: 0,
                            addTime: '2017-09-08T13:35:33.583Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29cb817b57b0012086319',
                            _id: '59b29cb817b57b001208631a',
                            counter: 0,
                            addTime: '2017-09-08T13:35:52.627Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29cc817b57b001208631b',
                            _id: '59b29cc817b57b001208631c',
                            counter: 0,
                            addTime: '2017-09-08T13:36:08.315Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29ce017b57b001208631d',
                            _id: '59b29ce017b57b001208631e',
                            counter: 0,
                            addTime: '2017-09-08T13:36:32.354Z',
                            opened: false
                        },
                        {
                            bookmarkId: '59b29d0117b57b001208631f',
                            _id: '59b29d0117b57b0012086320',
                            counter: 0,
                            addTime: '2017-09-08T13:37:05.039Z',
                            opened: false
                        }
                    ],
                    savedLinks: []
                },
                photo: 'https://storage.googleapis.com/iceberg-cfa80.appspot.com/images/0de093aa-47f2-4ba4-916d-59a27e763cbd.jpeg',
                color: 'rgb(4, 78, 105)',
                created: '2017-09-12T22:58:29.553Z',
                metrics: null,
                closed: false,
                linksCount: 8
            }
        ];
        expect(
            reducer(undefined,
                {type: FETCH_ANOTHER_USER_COLLECTIONS, payload: anotherUserCollection }),
        ).toEqual({
            ...initialState, collections: anotherUserCollection,
        });
    });
});
