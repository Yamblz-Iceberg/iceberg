const CHANGE_SEARCH = 'CHANGE_SEARCH';

const initialState = {
    text: '',
    result: [
        {
            id: 0,
            photo: 'https://i.ytimg.com/vi/4FAuNcWSxuY/mqdefault.jpg',
            title: 'Заголовок 1',
            linksCount: 320,
        },
        {
            id: 1,
            photo: '',
            title: 'Заголовок 2',
            linksCount: 32,
        },
        {
            id: 10,
            photo: 'https://i.ytimg.com/vi/4FAuNcWSxuY/mqdefault.jpg',
            title: 'Заголовок 3',
            linksCount: 1,
        },
        {
            id: 11,
            photo: '',
            title: 'Заголовок 4',
            linksCount: 4,
        },
        {
            id: 20,
            photo: 'https://i.ytimg.com/vi/4FAuNcWSxuY/mqdefault.jpg',
            title: 'Заголовок 5',
            linksCount: 54,
        },
        {
            id: 31,
            photo: '',
            title: 'Заголовок 6',
            linksCount: 0,
        },
        {
            id: 40,
            photo: 'https://i.ytimg.com/vi/4FAuNcWSxuY/mqdefault.jpg',
            title: 'Заголовок 7',
            linksCount: 1,
        },
        {
            id: 41,
            photo: '',
            title: 'Заголовок 8',
            linksCount: 23,
        },
        {
            id: 50,
            photo: 'https://i.ytimg.com/vi/4FAuNcWSxuY/mqdefault.jpg',
            title: 'Заголовок 9',
            linksCount: 7,
        },
        {
            id: 51,
            photo: '',
            title: 'Заголовок 10',
            linksCount: 2,
        },
    ],
};

const changeSearch = text => ({ type: CHANGE_SEARCH, payload: text });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_SEARCH:
        return { ...state, text: action.payload };
    default:
        return state;
    }
};

const actions = {
    changeSearch,
};

export { reducer, actions };
