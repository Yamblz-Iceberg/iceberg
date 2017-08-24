const ADD_ITEM = 'ADD_ITEM';

const initialState = {
    items: {
        hashes: [
            {
                id: 0,
                href: '/',
                text: '#design',
                background: 'red',
            },
            {
                id: 1,
                href: '/',
                text: '#dev',
                background: '#ffe200',
            },
            {
                id: 2,
                href: '/',
                text: '#links',
                background: 'black',
            },
            {
                id: 3,
                href: '/',
                text: '#javascript',
                background: '#b58c63',
            },
            {
                id: 4,
                href: '/',
                text: '#humor',
                background: '#547e8e',
            },
        ],
    },
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
