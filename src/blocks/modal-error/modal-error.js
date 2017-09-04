import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from './../../blocks';
import { ModalTemplate } from './../';
import { actions } from './../../reducers/modal.reducer';

class ModalError extends Component {
    handleClose = () => (
        this.props.hideModal()
    );
    render() {
        const { title = 'Ошибка', text = 'Ой, что-то пошло не так!', buttonText = 'Понятно' } = this.props.modal.modalProps;
        const content = (<div>
            <h3 className="modal__title">{title}</h3>
            <p className="modal__text">{text}</p>
            <div className="modal__buttons-block">
                <Button type={'light'} text={buttonText} onClick={this.handleClose} />
            </div>
        </div>);
        return (<ModalTemplate content={content} />);
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal,
    };
}

ModalError.propTypes = {
    hideModal: PropTypes.func.isRequired,
    modal: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { ...actions })(ModalError);
