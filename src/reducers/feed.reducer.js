import { fetchFeed } from '../services/feed.service';
import { showLoader } from './loader.reducer';

export const FETCH_FEED = 'FETCH_FEED';

const initialState = {
    tags: [],
    collections: [],
};

const loadFeed = feed => ({ type: FETCH_FEED, payload: feed });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_FEED:
        return { collections: action.payload.collections, tags: action.payload.tags };
    default:
        return state;
    }
};

const feedLoader = (queryParam, token) => (
    (dispatch) => {
        dispatch(showLoader());
        fetchFeed(queryParam, token).then((feed) => {
            dispatch(loadFeed(feed));
        });
    }
);

export { reducer, feedLoader };
