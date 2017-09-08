import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Icon } from '../../blocks';
import './floating-button.scss';

class FloatingButton extends Component {
    onButtonClick = () => {
        if (typeof this.props.userData.accType !== 'undefined' && this.props.userData.accType !== 'demo') {
            this.props.history.push({ pathname: '/create-empty' });
        } else {
            localStorage.setItem('returnToAfterAuth', this.props.history.location.pathname);
            this.props.history.push('/authorization');
        }
    };

    render() {
        return (
            <button className="floating-button" onClick={this.onButtonClick}>
                <Icon iconName={'plus'} />
            </button>
        );
    }
}

FloatingButton.propTypes = {
    history: PropTypes.any.isRequired,
    userData: PropTypes.object.isRequired,
};

export default connect(
    state => ({ userData: state.user.data }),
)(withRouter(FloatingButton));
