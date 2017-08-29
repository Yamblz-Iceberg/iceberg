import { fetchFeed } from '../services/feed.service';

const FETCH_FEED = 'FETCH_FEED';

const initialState = {
    tags: [],
    cards: [],
};

const loadFeed = feed => ({ type: FETCH_FEED, payload: feed });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_FEED:
        return { cards: action.payload.cards, tags: action.payload.tags };
    default:
        return state;
    }
};

const loader = () => (
    (dispatch) => {
        fetchFeed().then((feed) => {
            dispatch(loadFeed(feed));
        });
    }
);

export { reducer, loader };
