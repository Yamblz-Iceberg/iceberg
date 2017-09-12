const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

const initialState = {
    modalType: null,
    modalProps: {
        title: 'Ошибка',
        text: 'Ой, что-то пошло не так!',
        buttonText: 'Понятно',
    },
};

const showModalAction = (text, modalText = initialState.modalProps) => ({
    type: SHOW_MODAL, modalType: text, modalProps: modalText,
});
const hideModalAction = () => ({ type: HIDE_MODAL });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SHOW_MODAL:
        return {
            modalType: action.modalType,
            modalProps: { ...state.modalProps, ...action.modalProps },
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
    hideModalAction();
};

const showModal = (text, modalText) => {
    document.body.addEventListener('touchmove', handleTouchMove, false);
    showModalAction(text, modalText);
};

const actions = {
    hideModal,
    showModal,
};

export { reducer, actions };
