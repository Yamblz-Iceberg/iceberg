import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { LimitedTextarea } from '../';
import CreateDescriptionHeader from './header/create-description-header';
import { updateDescription } from '../../../reducers/create-collection.reducer';

import './create-description.scss';

class CreateDescription extends Component {
    constructor() {
        super();
        this.state = {
            resetText: false,
        };
    }

    setTextContent = (flag) => {
        this.setState({
            resetText: flag,
        });
    }

    resetTextContent = () => {
        this.setTextContent(!this.state.resetText);
        this.props.updateDescription('');
    }

    handleTextContentChange = (value) => {
        this.props.updateDescription(value);
    }

    render() {
        return (
            <main className="create-description">
                <CreateDescriptionHeader callback={this.resetTextContent} />
                <div className="create-description__limited-textarea">
                    <LimitedTextarea
                        max={1000}
                        handleChange={this.handleTextContentChange}
                        resetTextContent={this.state.resetText}
                    />
                </div>
            </main>
        );
    }
}

CreateDescription.propTypes = {
    updateDescription: PropTypes.func.isRequired,
};

export default connect(
    state => ({ description: state.description }),
    { updateDescription },
)(CreateDescription);
