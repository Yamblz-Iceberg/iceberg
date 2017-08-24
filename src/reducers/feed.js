const ADD_ITEM = 'ADD_ITEM';

const initialState = {
    items: [
        {
            id: 1,
            title: 'Block 1',
        },
        {
            id: 2,
            title: 'Block 2',
        },
        {
            id: 3,
            title: 'Tags',
        },
        {
            id: 4,
            title: 'Block 3',
        },
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_ITEM:
        return { ...state, items: [...state.items, action.item] };
    default:
        return state;
    }
};

const addItem = item => (dispatch) => {
    dispatch({
        type: ADD_ITEM,
        item,
    });
};

const actions = {
    addItem,
};

export { reducer, actions };
