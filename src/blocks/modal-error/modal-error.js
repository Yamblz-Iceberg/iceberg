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
        const content = (<div>
            <h3 className="modal__title">Произошла ошибка</h3>
            <p className="modal__text">Попробуйте подождать или перезапустите приложение и попробуйте еше раз</p>
            <div className="modal__buttons-block">
                <Button type={'light'} text={'Подождать'} onClick={this.handleClose} />
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
};

export default connect(mapStateToProps, { ...actions })(ModalError);
