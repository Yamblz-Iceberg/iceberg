export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

const initialState = {
    modalType: null,
    modalProps: {
        title: 'Ошибка',
        text: 'Ой, что-то пошло не так!',
        buttonText: 'Понятно',
    },
};

const showModalAction = (modalType, modalProps = initialState.modalProps) => ({
    type: SHOW_MODAL, modalType, modalProps,
});
const hideModalAction = () => ({ type: HIDE_MODAL });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case SHOW_MODAL:
        return {
            modalType: action.modalType,
            modalProps: { ...action.modalProps },
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

const hideModal = () => (
    (dispatch) => {
        document.body.removeEventListener('touchmove', handleTouchMove);
        dispatch(hideModalAction());
    }
);

const showModal = (modalType, modalProps) => (
    (dispatch) => {
        document.body.addEventListener('touchmove', handleTouchMove);
        dispatch(showModalAction(modalType, modalProps));
    }
);

const showErrorModal = modalProps => (
    showModal('ERROR_MESSAGE', modalProps)
);

const actions = {
    hideModal,
    showErrorModal,
};

export { reducer, actions };
