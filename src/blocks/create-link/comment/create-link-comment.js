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
        return (
            <main className="add-comment">
                <CreateLinkHeader
                    callback={this.resetTextContent}
                    title="комментарий"
                />
                <div className="add-comment__limited-textarea">
                    <LimitedTextarea
                        max={300}
                        handleChange={this.handleTextContentChange}
                        resetTextContent={this.state.resetText}
                        initialText={this.props.comment}
                    />
                </div>
            </main>
        );
    }
}

CreateLinkComment.propTypes = {
    addComment: PropTypes.func.isRequired,
    comment: PropTypes.string,
};

CreateLinkComment.defaultProps = {
    comment: '',
};

export default connect(
    state => ({ comment: state.link.comment }),
    { addComment },
)(CreateLinkComment);
