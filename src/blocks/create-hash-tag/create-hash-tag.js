import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './create-hash-tag.scss';

import { Icon } from './../../blocks';

class CreateHashTag extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            created: false,
        };
    }

    componentWillMount = () => {
        const { text } = this.props;

        if (this.props.text !== '') {
            this.setState({
                text,
                created: true,
            });
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.text !== this.props.text) {
            this.setText(nextProps.text);
        } else if (!this.state.created) {
            this.setText('');
        }
    }

    setText = (text) => {
        this.setState({
            text,
        });
    }

    handleBlurInput = () => {
        // Создавать тег при потере фокуса, если он еще не создан
        if (!this.state.created && this.state.text !== '') {
            this.props.tagAddCallback();
        }
    }

    render() {
        const {
            initText,
            tagChangeCallback,
            tagAddCallback,
            tagDeleteCallback,
        } = this.props;

        const { text, created } = this.state;

        return (
            <div className="create-hash-tag">
                <input
                    type="text"
                    value={text}
                    className="create-hash-tag__hashtag-input"
                    onChange={tagChangeCallback}
                    onBlur={this.handleBlurInput}
                    placeholder={initText}
                    maxLength="17"
                />
                {(text !== '') && (
                    <span
                        onClick={!created ? tagAddCallback : tagDeleteCallback}
                        className="create-hash-tag__icon-wrapper"
                    >
                        <Icon
                            iconName={!created ? 'plus' : 'close'}
                            iconColor={'#fff'}
                        />
                    </span>)
                }
            </div>
        );
    }
}

CreateHashTag.defaultProps = {
    tagDeleteCallback: e => e,
};

CreateHashTag.propTypes = {
    text: PropTypes.string.isRequired,
    initText: PropTypes.string.isRequired,
    tagAddCallback: PropTypes.func.isRequired,
    tagChangeCallback: PropTypes.func.isRequired,
    tagDeleteCallback: PropTypes.func,
};

export default CreateHashTag;
