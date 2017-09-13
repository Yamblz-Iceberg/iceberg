import {
    reducer,
    UPDATE_DESCRIPTION,
    UPDATE_TITLE,
    UPDATE_SWITCHER,
    ADD_IMAGE,
    ADD_HASHTAG,
    DELETE_HASHTAG,
    EDIT_HASHTAG,
    PUT_COLLECTION,
    CLEAR_COLLECTION,
} from '../../reducers/create-collection.reducer';

describe('create-collection reducer', () => {
    const initialState = {
        description: '',
        title: '',
        tags: [],
        color: '',
        photo: '',
        closed: false,
    };

    it('should return initial state', () => {
        expect(
            reducer(undefined, {}),
        ).toEqual(initialState);
    });

    it('should handle UPDATE_DESCRIPTION', () => {
        const description = 'Описание';
        expect(
            reducer(undefined, { type: UPDATE_DESCRIPTION, payload: description }),
        ).toEqual({
            ...initialState,
            description,
        });
    });

    it('should handle UPDATE_TITLE', () => {
        const title = 'Заголовок';
        expect(
            reducer(undefined, { type: UPDATE_TITLE, payload: title }),
        ).toEqual({
            ...initialState,
            title,
        });
    });

    it('should handle UPDATE_SWITCHER', () => {
        const name = 'closed';
        const status = true;
        expect(
            reducer(undefined, { type: UPDATE_SWITCHER, payload: { [name]: status } }),
        ).toEqual({
            ...initialState,
            ...{ [name]: status },
        });
    });

    it('should handle ADD_IMAGE', () => {
        const photo = 'https://i01.fotocdn.net/s24/24/gallery_m/333/2590198807.jpg';
        const color = '#fff';
        expect(
            reducer(undefined, { type: ADD_IMAGE, color, photo }),
        ).toEqual({
            ...initialState,
            ...{ color, photo },
        });
    });

    it('should handle ADD_HASHTAG', () => {
        const name = 'test';
        const id = '59b91d8694a1e00012aac8b9';
        expect(
            reducer(undefined, { type: ADD_HASHTAG, name, id }),
        ).toEqual({
            ...initialState,
            tags: [
                ...initialState.tags,
                { id, name },
            ],
        });
    });

    it('should handle DELETE_HASHTAG', () => {
        const id = '59b91d8694a1e00012aac8b9';
        const state = {
            ...initialState,
            tags: [{
                id: '59b91d8694a1e00012aac8b9',
                name: 'test',
            }],
        };
        const filteredArray = state.tags.filter(hashTag =>
            hashTag.id !== id,
        );
        expect(
            reducer(undefined, { type: DELETE_HASHTAG, payload: id }),
        ).toEqual({
            ...initialState,
            tags: filteredArray,
        });
    });

    it('should handle EDIT_HASHTAG', () => {
        const id = '59b91d8694a1e00012aac8b9';
        const newTagName = 'testUpdated';
        const tags = [{
            id: '59b91d8694a1e00012aac8b9',
            name: 'test',
        }];
        const tagNeedUpdate = {
            id: '59b91d8694a1e00012aac8b9',
            name: 'testUpdated',
        };
        const update = (items, item) => {
            const editedArray = [].concat(items);
            editedArray[items.findIndex(x => x.id === item.id)] = item;

            return editedArray;
        };
        expect(
            reducer({ ...initialState, tags },
                { type: EDIT_HASHTAG, payload: { id, name: newTagName } }),
        ).toEqual({
            ...initialState,
            tags: update(tags, tagNeedUpdate),
        });
    });

    it('it should handle PUT_COLLECTION', () => {
        expect(
            reducer(undefined, { type: PUT_COLLECTION }),
        ).toEqual({
            ...initialState,
        });
    });

    it('it should handle CLEAR_COLLECTION', () => {
        expect(
            reducer(undefined, { type: CLEAR_COLLECTION }),
        ).toEqual({
            ...initialState,
        });
    });
});
