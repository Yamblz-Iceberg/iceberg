import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { LimitedTextarea } from '../../../blocks';
import CreateLinkHeader from '../header/create-link-header';
import { addComment } from '../../../reducers/link.reducer';

import './create-link-comment.scss';

class CreateLinkComment extends Component {
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
    };

    resetTextContent = () => {
        this.setTextContent(!this.state.resetText);
        this.props.addComment('');
    };

    handleTextContentChange = (value) => {
        this.props.addComment(value);
    };

    render() {
        const showAddButton = false;
        return (
            <main className="add-comment">
                <CreateLinkHeader
                    callback={this.resetTextContent}
                    title="комментарий"
                    showAddButton={showAddButton}
                />
                <div className="add-comment__limited-textarea">
                    <LimitedTextarea
                        max={300}
                        handleChange={this.handleTextContentChange}
                        resetTextContent={this.state.resetText}
                        initialText={this.props.description}
                    />
                </div>
            </main>
        );
    }
}

CreateLinkComment.propTypes = {
    addComment: PropTypes.func.isRequired,
    description: PropTypes.string,
};

CreateLinkComment.defaultProps = {
    description: '',
};

export default connect(
    state => ({ description: state.link.description }),
    { addComment },
)(CreateLinkComment);
