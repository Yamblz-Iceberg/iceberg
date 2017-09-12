import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CreateLinkCommentHeader from './__header/create-link-comment__header';
import { LimitedTextarea } from '../index';
import { addComment } from '../../reducers/link.reducer';
import './create-link-comment.scss';

class CreateLinkComment extends Component {
    static propTypes = {
        addComment: PropTypes.func.isRequired,
        description: PropTypes.string,
    };
    static defaultProps = {
        description: '',
    };
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
                <CreateLinkCommentHeader
                    callback={this.resetTextContent}
                    title="Комментарий"
                />
                <div className="add-comment__limited-textarea">
                    <LimitedTextarea
                        max={100}
                        handleChange={this.handleTextContentChange}
                        resetTextContent={this.state.resetText}
                        initialText={this.props.description}
                    />
                </div>
            </main>
        );
    }
}

export default connect(
    state => ({ description: state.link.description }),
    { addComment },
)(CreateLinkComment);
