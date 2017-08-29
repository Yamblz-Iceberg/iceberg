import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Icon } from './../../elements';
import { actions as modalActions } from './../../../reducers/modal.reducer';

import './modal-template.scss';

/**
 * Шаблон для модальных окон:
 * - есть крестик для закрытия;
 * - контент для тела;
 * - футер с кнопками;
 * - возможен заголовок или без негож
 */
class ModalTemplate extends Component {
    hideModal = () => {
        this.props.hideModal();
    }
    render() {
        const { title, content, buttons } = this.props;
        return (<div className="modal-window__container">
            <div className="modal-window__header">
                { title }
                <span onClick={this.hideModal}>
                    <Icon iconName={'close'} />
                </span>
            </div>
            <div className="modal-window__body">
                { content }
            </div>
            <div className="modal-window__footer input-single">
                {
                    buttons.map(button => (
                        <Button
                            key={button.name}
                            text={button.text}
                        />
                    ))
                }
            </div>
        </div>);
    }
}

ModalTemplate.propTypes = {
    content: PropTypes.object.isRequired,
    title: PropTypes.string,
    buttons: PropTypes.array,
    hideModal: PropTypes.func.isRequired,
};

ModalTemplate.defaultProps = {
    title: '',
    buttons: [],
};

function mapStateToProps(state) {
    return {
        modal: state.modal,
    };
}

export default connect(mapStateToProps, { ...modalActions })(ModalTemplate);
