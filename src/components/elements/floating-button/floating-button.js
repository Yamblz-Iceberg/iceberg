import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Icon } from './../../elements';
import './floating-button.scss';

class FloatingButton extends Component {
    onButtonClick = () => {
        this.props.history.push({ pathname: './create-empty' });
    }

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
};

export default withRouter(FloatingButton);
