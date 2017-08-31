import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Icon } from './../../blocks';
import { actions as modalActions } from './../../reducers/modal.reducer';

import './modal-template.scss';

/**
 * Шаблон для модальных окон:
 * - есть крестик для закрытия;
 * - добавляется контент;
 */
class ModalTemplate extends Component {
    hideModal = () => {
        this.props.hideModal();
    }
    render() {
        const { content } = this.props;
        return (<div className="modal__wrap">
            <div className="modal__container">
                <div className="modal__header">
                    <span className="modal__close" onClick={this.hideModal}>
                        <Icon iconName={'close'} />
                    </span>
                </div>
                <div className="modal__body">
                    { content }
                </div>
            </div>
        </div>);
    }
}

ModalTemplate.propTypes = {
    content: PropTypes.object.isRequired,
    hideModal: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        modal: state.modal,
    };
}

export default connect(mapStateToProps, { ...modalActions })(ModalTemplate);
