import { CHANGE_SEARCH, FETCH_SEARCH_RESULT } from './search.reducer';
import { FETCH_FEED } from './feed.reducer';
import { GET_USER_COLLECTIONS, GET_USER_LINKS } from './bookmarks.reducer';

const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';

const showLoader = () => ({ type: SHOW_LOADER });
const hideLoader = () => ({ type: HIDE_LOADER });

const reducer = (state = false, action) => {
    switch (action.type) {
    case SHOW_LOADER:
    case CHANGE_SEARCH:
        return true;
    case HIDE_LOADER:
    case FETCH_SEARCH_RESULT:
    case FETCH_FEED:
    case GET_USER_COLLECTIONS:
    case GET_USER_LINKS:
        return false;
    default:
        return state;
    }
};

export { reducer, showLoader, hideLoader };
