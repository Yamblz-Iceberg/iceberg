import { fetchCards } from '../services/feed.service';

const FETCH_CARDS = 'FETCH_CARDS';

const initialState = {
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
    cards: [],
};

const loadCards = cards => ({ type: FETCH_CARDS, payload: cards });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_CARDS:
        return { ...state, cards: action.payload };
    default:
        return state;
    }
};

const loader = () => (
    (dispatch) => {
        fetchCards().then((cards) => {
            dispatch(loadCards(cards.cards));
        });
    }
);

export { reducer, loader };
