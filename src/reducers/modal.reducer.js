const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

const initialState = {
    modalType: null,
    modalProps: {},
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

const hideModal = () => {
    document.body.removeEventListener('touchmove', (e) => { e.preventDefault(); });
    return { type: HIDE_MODAL };
};
const showModal = (text) => {
    // TODO: придумать что-нибудь красивое с блокировкой скрола
    document.body.addEventListener('touchmove', (e) => { e.preventDefault(); });
    return { type: SHOW_MODAL, modalType: text };
};

const actions = {
    hideModal,
    showModal,
};

export { reducer, actions };
