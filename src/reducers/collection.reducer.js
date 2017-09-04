import { fetchCollection } from '../services/collection.service';

const FETCH_COLLECTION = 'FETCH_COLLECTION';

const initialState = {
    author: {},
    tags: [],
    links: [],
    name: '',
    description: '',
};

const loadCollection = collection => ({ type: FETCH_COLLECTION, payload: collection });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_COLLECTION:
        return { ...state, ...action.payload };
    default:
        return state;
    }
};

const collectionLoader = (collectionId, token) => (
    (dispatch) => {
        fetchCollection(collectionId, token).then((res) => {
            dispatch(loadCollection(res.collection));
        });
    }
);

export { reducer, collectionLoader };
