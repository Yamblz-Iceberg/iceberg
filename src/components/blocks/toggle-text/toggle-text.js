import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Icon } from '../../elements';

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

    render() {
        return (
            <div
                className={`text-toggle ${this.state.showAllText === true ? 'text-toggle--show-all' : ''}`}
                onClick={() => this.setState({ showAllText: !this.state.showAllText })}
            >
                <div className="text-toggle__text">
                    { this.props.text }
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
