import { reducer, SHOW_LOADER, HIDE_LOADER } from './../../reducers/loader.reducer';
import { CHANGE_SEARCH, FETCH_SEARCH_RESULT } from './../../reducers/search.reducer';
import { FETCH_FEED } from './../../reducers/feed.reducer';
import { GET_USER_COLLECTIONS, GET_USER_LINKS } from './../../reducers/bookmarks.reducer';
import { ADD_LINK } from './../../reducers/link.reducer';

describe('loader reducer', () => {
    it('should handle SHOW_LOADER', () => {
        expect(
            reducer(false, { type: SHOW_LOADER }),
        ).toEqual(true);
    });

    it('should handle HIDE_LOADER', () => {
        expect(
            reducer(true, { type: HIDE_LOADER }),
        ).toEqual(false);
    });

    it('should handle CHANGE_SEARCH', () => {
        expect(
            reducer(false, { type: CHANGE_SEARCH }),
        ).toEqual(true);
    });

    it('should handle FETCH_SEARCH_RESULT', () => {
        expect(
            reducer(true, { type: FETCH_SEARCH_RESULT }),
        ).toEqual(false);
    });

    it('should handle FETCH_FEED', () => {
        expect(
            reducer(true, { type: FETCH_FEED }),
        ).toEqual(false);
    });

    it('should handle GET_USER_COLLECTIONS', () => {
        expect(
            reducer(true, { type: GET_USER_COLLECTIONS }),
        ).toEqual(false);
    });

    it('should handle GET_USER_LINKS', () => {
        expect(
            reducer(true, { type: GET_USER_LINKS }),
        ).toEqual(false);
    });

    it('should handle ADD_LINK', () => {
        expect(
            reducer(true, { type: ADD_LINK }),
        ).toEqual(false);
    });
});
