import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ModalTemplate } from './../../blocks';
import { actions } from './../../../reducers/modal.reducer';

class ModalError extends Component {
    handleClose = () => (
        this.props.hideModal()
    );
    render() {
        const content = (<div />);
        const buttons = [
            {
                name: 'ok',
                text: 'Подождать',
                className: 'button-success',
                onClick: this.handleClose,
            },
        ];
        return (<ModalTemplate content={content} buttons={buttons} />);
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
