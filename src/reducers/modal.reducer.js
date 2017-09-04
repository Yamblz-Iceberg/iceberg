const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

const initialState = {
    modalType: null,
    modalProps: {
        title: '',
        text: '',
        buttonText: '',
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SHOW_MODAL:
        return {
            modalType: action.modalType,
            modalProps: action.modalProps,
        };
    case HIDE_MODAL:
        return initialState;
    default:
        return state;
    }
};

const handleTouchMove = (e) => {
    e.preventDefault();
};

const hideModal = () => {
    document.body.removeEventListener('touchmove', handleTouchMove);
    return { type: HIDE_MODAL };
};
const showModal = (text, modalText) => {
    // TODO: придумать что-нибудь красивое с блокировкой скрола
    document.body.addEventListener('touchmove', handleTouchMove, false);
    return { type: SHOW_MODAL, modalType: text, modalProps: modalText };
};

const actions = {
    hideModal,
    showModal,
};

export { reducer, actions };
