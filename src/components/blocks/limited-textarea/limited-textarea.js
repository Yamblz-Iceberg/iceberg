import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './limited-textarea.scss';

class LimitedTextarea extends Component {
    constructor() {
        super();
        this.state = {
            textContent: '',
        };
    }

    setTextContent = () => {
        this.setState({
            textContent: this.input.value,
        });
    }

    handleChange = () => {
        this.setTextContent();
        this.props.callback();
    }

    render() {
        const { max } = this.props;

        return (
            <div className="limited-textarea">
                <span
                    className="limited-textarea__counter"
                >{this.state.textContent.length}/{max}</span>
                <textarea
                    className="limited-textarea__input"
                    maxLength={max}
                    onChange={this.handleChange}
                    ref={(input) => { this.input = input; }}
                />
            </div>
        );
    }
}

LimitedTextarea.propTypes = {
    callback: PropTypes.func.isRequired,
    max: PropTypes.number.isRequired,
};

export default LimitedTextarea;
