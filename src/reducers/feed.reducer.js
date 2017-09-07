import { fetchFeed } from '../services/feed.service';
import { showLoader } from './loader.reducer';

export const FETCH_FEED = 'FETCH_FEED';
const CHANGE_SAVED_STATUS_BY_ID = 'CHANGE_SAVED_STATUS_BY_ID';

const initialState = {
    tags: [],
    collections: [],
};

const loadFeed = feed => ({ type: FETCH_FEED, payload: feed });
const changeSavedStatusOfCardById =
    (id, status) => ({ type: CHANGE_SAVED_STATUS_BY_ID, id, status });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_FEED:
        return { collections: action.payload.collections, tags: action.payload.tags };
    case CHANGE_SAVED_STATUS_BY_ID: {
        const update = (items, id, status) => {
            const editedCollection = [].concat(items);
            const editindCard = editedCollection[items.findIndex(x => x._id === id)];
            editindCard.saved = status;
            if (status) {
                editindCard.savedTimesCount += 1;
            } else {
                editindCard.savedTimesCount -= 1;
            }
            return editedCollection;
        };

        return { ...state,
            collections: update([...state.collections], action.id, action.status),
        };
    }
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

export { reducer, feedLoader, changeSavedStatusOfCardById };
