import { fetchSearchResult } from '../services/search.service';

export const CHANGE_SEARCH = 'CHANGE_SEARCH';
export const FETCH_SEARCH_RESULT = 'FETCH_SEARCH_RESULT';

const initialState = {
    text: '',
    result: {
        collections: [],
        tags: [],
    },
};

const changeSearch = text => ({ type: CHANGE_SEARCH, payload: text });
const loadSearchResult = result => ({ type: FETCH_SEARCH_RESULT, payload: result });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_SEARCH:
        return { ...initialState, text: action.payload };
    case FETCH_SEARCH_RESULT:
        return { ...state, result: action.payload };
    default:
        return state;
    }
};

const searchResultLoader = (searchText, token) => (
    (dispatch) => {
        fetchSearchResult(searchText, token).then((result) => {
            dispatch(loadSearchResult(result));
        });
    }
);

const actions = {
    changeSearch,
    searchResultLoader,
};

export { reducer, actions };
