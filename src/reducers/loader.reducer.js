import { CHANGE_SEARCH, FETCH_SEARCH_RESULT } from './search.reducer';

const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';

const showLoader = () => ({ type: SHOW_LOADER });
const hideLoader = () => ({ type: HIDE_LOADER });

const reducer = (state = false, action) => {
    switch (action.type) {
    case CHANGE_SEARCH:
    case SHOW_LOADER:
        return true;
    case FETCH_SEARCH_RESULT:
    case HIDE_LOADER:
        return false;
    default:
        return state;
    }
};

export { reducer, showLoader, hideLoader };
