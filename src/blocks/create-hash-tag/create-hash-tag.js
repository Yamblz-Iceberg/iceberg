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
                    placeholder={initText}
                />
                {(text !== '') && (
                    <span onClick={!created ? tagAddCallback : tagDeleteCallback}>
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

CreateHashTag.propTypes = {
    text: PropTypes.string.isRequired,
    initText: PropTypes.string.isRequired,
    tagAddCallback: PropTypes.func.isRequired,
    tagChangeCallback: PropTypes.func.isRequired,
    tagDeleteCallback: PropTypes.func.isRequired,
};

export default CreateHashTag;
