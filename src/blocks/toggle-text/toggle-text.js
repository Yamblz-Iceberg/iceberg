import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../blocks';

import './toggle-text.scss';

class ToggleText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAllText: false,
            text: '',
        };
    }

    componentWillReceiveProps() {
        this.setState({ text: this.props.text });
    }

    showAllText= () => {
        if (document.querySelector('.text-toggle__text-wrapper').offsetHeight
            > document.querySelector('.text-toggle__text').offsetHeight || this.state.showAllText === true) {
            this.setState({ showAllText: !this.state.showAllText });
        }
    };

    render() {
        return (
            <div
                className={`text-toggle ${this.state.showAllText === true ? 'text-toggle--show-all' : ''}`}
                onClick={() => this.showAllText()}
            >
                <div className="text-toggle__text">
                    <span className="text-toggle__text-wrapper">{ this.props.text }</span>
                </div>
                <div className="text-toggle__icon" >
                    <Icon iconName={'arrow-more--popup'} />
                </div>
            </div>
        );
    }
}

ToggleText.propTypes = {
    text: PropTypes.string.isRequired,
};

export default ToggleText;
