import { reducer, FETCH_FEED, CHANGE_SAVED_STATUS_BY_ID } from './../../reducers/feed.reducer';

const initialState = {
    tags: [],
    collections: [],
};

const data = {
    tags: [{ _id: '59b28d3217b57b0012086184', name: 'искусство' }],
    collections: [
        {
            _id: '59b28d5c17b57b0012086188',
            name: 'Познавательные сайты об искусстве',
            author: {
                firstName: 'Awesome',
                lastName: 'User',
            },
            savedTimesCount: 5,
            saved: false,
        },
    ],
};

const dataWithTrueStatus = {
    tags: [{ _id: '59b28d3217b57b0012086184', name: 'искусство' }],
    collections: [
        {
            _id: '59b28d5c17b57b0012086188',
            name: 'Познавательные сайты об искусстве',
            author: {
                firstName: 'Awesome',
                lastName: 'User',
            },
            savedTimesCount: 6,
            saved: true,
        },
    ],
};

const dataWithFalseStatus = {
    tags: [{ _id: '59b28d3217b57b0012086184', name: 'искусство' }],
    collections: [
        {
            _id: '59b28d5c17b57b0012086188',
            name: 'Познавательные сайты об искусстве',
            author: {
                firstName: 'Awesome',
                lastName: 'User',
            },
            savedTimesCount: 5,
            saved: false,
        },
    ],
};

describe('user reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {}),
        ).toEqual(initialState);
    });

    it('should handle FETCH_FEED', () => {
        expect(
            reducer(initialState, { type: FETCH_FEED, payload: data }),
        ).toEqual(data);
    });

    it('should handle CHANGE_SAVED_STATUS_BY_ID with true status', () => {
        expect(
            reducer(data, {
                type: CHANGE_SAVED_STATUS_BY_ID,
                id: data.collections[0]._id,
                status: true,
            }),
        ).toEqual(dataWithTrueStatus);
    });

    it('should handle CHANGE_SAVED_STATUS_BY_ID with false status', () => {
        expect(
            reducer(dataWithTrueStatus, {
                type: CHANGE_SAVED_STATUS_BY_ID,
                id: dataWithTrueStatus.collections[0]._id,
                status: false,
            }),
        ).toEqual(dataWithFalseStatus);
    });
});
