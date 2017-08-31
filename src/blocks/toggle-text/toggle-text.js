import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../blocks';

import './toggle-text.scss';

class ToggleText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToggleIcon: true,
            showAllText: false,
            text: '',
        };
    }

    componentDidMount() {
        if (this.toggleTextWrapper.offsetHeight <= this.toggleText.offsetHeight) {
            /* eslint-disable */
            this.setState({ showToggleIcon: false });
        }
    }

    componentWillReceiveProps() {
        this.setState({ text: this.props.text });
    }

    showAllText = () => {
        if (this.toggleTextWrapper.offsetHeight
            > this.toggleText.offsetHeight || this.state.showAllText === true) {
            this.setState({ showAllText: !this.state.showAllText });
        }
    };

    render() {
        return (
            <div
                className={`text-toggle ${this.state.showAllText === true ? 'text-toggle--show-all' : ''}`}
                onClick={() => this.showAllText()}
            >
                <div className="text-toggle__text" ref={(el) => { this.toggleText = el; }} >
                    <span
                        className="text-toggle__text-wrapper"
                        ref={(el) => { this.toggleTextWrapper = el; }}
                    >
                        { this.props.text }
                        { Object.keys(this.props.component).length > 0 ? this.props.component : '' }
                    </span>
                </div>
                <div className={`${this.state.showToggleIcon === true
                    ? 'text-toggle__icon '
                    : 'text-toggle__icon text-toggle__icon--hide'
                }`}>
                    <Icon iconName={'arrow-more--popup'} />
                </div>
            </div>
        );
    }
}

ToggleText.propTypes = {
    text: PropTypes.string.isRequired,
    component: PropTypes.object,
};

ToggleText.defaultProps = {
    component: {},
};

export default ToggleText;
