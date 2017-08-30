import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './option.scss';
import { gray } from './../../../variables.scss';

import { SwitchButton, Notice, Icon } from '../../elements';

class Option extends Component {
    constructor() {
        super();
        this.state = {
            noticeVisible: false,
            top: 0,
            left: 0,
        };
    }

    callNotice = (event) => {
        this.setState({
            noticeVisible: true,
            top: event.clientY,
            left: event.clientX,
        });
    }

    hideNotice = () => {
        this.setState({
            noticeVisible: false,
        });
    }

    render() {
        const { option, noticeText } = this.props;

        const noticeProps = {
            text: noticeText,
            top: this.state.top - 20,
            left: this.state.left - 10,
        };

        return (
            <div className="option">
                <span className="option__text">{option}</span>
                <span
                    className="option__notice-icon"
                    role="button"
                    tabIndex="0"
                    onClick={this.callNotice}
                >
                    <Icon
                        iconName="question"
                        iconColor={gray}
                    />
                </span>
                <div
                    className="option__notice-container"
                    onClick={this.hideNotice}
                    role="button"
                    tabIndex="0"
                >
                    { this.state.noticeVisible ? <Notice {...noticeProps} /> : '' }
                </div>
                <SwitchButton callback={this.props.callback} type="android" />
            </div>
        );
    }
}

Option.defaultProps = {
    noticeText: '',
};

Option.propTypes = {
    option: PropTypes.string.isRequired,
    noticeText: PropTypes.string,
    callback: PropTypes.func.isRequired,
};

export default Option;
