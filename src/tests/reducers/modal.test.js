import { reducer, SHOW_MODAL, HIDE_MODAL } from './../../reducers/modal.reducer';

const initialState = {
    modalType: null,
    modalProps: {
        title: 'Ошибка',
        text: 'Ой, что-то пошло не так!',
        buttonText: 'Понятно',
    },
};

const mockDataErrorMessage = {
    modalType: 'ERROR_MESSAGE',
    modalProps: {
        title: 'Другая ошибка',
        text: 'Другое что-то пошло не так',
        buttonText: 'Другое понятно',
    },
};

const mockDataAnotherMessage = {
    modalType: 'ANOTHER_MESSAGE',
    modalProps: {
        title: 'Другой заголовок',
        field: 'Новое поле',
    },
};

describe('Тестирование Modal.reducer', () => {
    it('По умолчанию возвращает Initial State', () => {
        expect(
            reducer(undefined, {}),
        ).toEqual(initialState);
    });

    it('SHOW_MODAL: ERROR_MESSAGE с параметрами', () => {
        expect(
            reducer(initialState,
                {
                    type: SHOW_MODAL,
                    modalType: mockDataErrorMessage.modalType,
                    modalProps: mockDataErrorMessage.modalProps,
                }),
        ).toEqual({
            ...initialState,
            modalType: mockDataErrorMessage.modalType,
            modalProps: mockDataErrorMessage.modalProps,
        });
    });

    it('SHOW_MODAL: Другой тип сообщения в модалку с другими полями', () => {
        expect(
            reducer(initialState,
                {
                    type: SHOW_MODAL,
                    modalType: mockDataAnotherMessage.modalType,
                    modalProps: mockDataAnotherMessage.modalProps,
                }),
        ).toEqual({
            ...initialState,
            modalType: mockDataAnotherMessage.modalType,
            modalProps: mockDataAnotherMessage.modalProps,
        });
    });

    it('HIDE_MODAL: Закрытие модалки и очистка стейта', () => {
        expect(
            reducer(mockDataErrorMessage,
                {
                    type: HIDE_MODAL,
                }),
        ).toEqual({ ...initialState });
    });
});
