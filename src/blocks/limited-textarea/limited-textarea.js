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

    componentWillMount() {
        const { initialText } = this.props;
        if (initialText !== '') {
            this.setState({
                textContent: initialText,
            });
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props.resetTextContent !== nextProps.resetTextContent) {
            this.resetTextContent();
            this.setTextContent();
        }
    }

    setTextContent = () => {
        this.setState({
            textContent: this.input.value,
        });
    }

    resetTextContent = () => {
        this.input.value = '';
    }

    handleChange = (e) => {
        this.setTextContent();
        this.props.handleChange(e.target.value);
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
                    placeholder="Введите текст описания"
                    value={this.state.textContent}
                />
            </div>
        );
    }
}

LimitedTextarea.defaultProps = {
    initialText: '',
};

LimitedTextarea.propTypes = {
    handleChange: PropTypes.func.isRequired,
    max: PropTypes.number.isRequired,
    resetTextContent: PropTypes.bool.isRequired,
    initialText: PropTypes.string,
};

export default LimitedTextarea;
