import { CHANGE_SEARCH, FETCH_SEARCH_RESULT } from './search.reducer';

const reducer = (state = false, action) => {
    switch (action.type) {
    case CHANGE_SEARCH:
        return true;
    case FETCH_SEARCH_RESULT:
        return false;
    default:
        return state;
    }
};

export { reducer };
