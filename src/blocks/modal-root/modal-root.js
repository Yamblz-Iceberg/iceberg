import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ModalError } from './../';

/**
 *  Список вcех модальных окон
 */
const MODAL_COMPONENTS = {
    ERROR_MESSAGE: ModalError,
};

/**
 * Контроллер отображения модального окна: если нет типа - ничего не рендерим
 */
const ModalRoot = ({ modalType, modalProps }) => {
    if (!modalType) {
        return null;
    }

    const SpecificModal = MODAL_COMPONENTS[modalType];
    return <SpecificModal {...modalProps} />;
};

ModalRoot.propTypes = {
    modalType: PropTypes.string,
    modalProps: PropTypes.object,
};

ModalRoot.defaultProps = {
    modalType: null,
    modalProps: {},
};

export default connect(state => state.modal)(ModalRoot);
