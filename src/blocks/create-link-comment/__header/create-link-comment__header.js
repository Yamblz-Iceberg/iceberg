import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Icon } from '../../../blocks';

import './create-link-comment__header.scss';
import { ContextMenu } from '../../index';

class CreateLinkCommentHeader extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        history: PropTypes.object.isRequired,
        callback: PropTypes.func.isRequired,
    };
    goBack = () => {
        this.props.history.goBack();
    };
    clearTextArea = () => {
        this.props.callback();
    };

    render() {
        const contextMenuItems = [
            {
                title: 'Очистить',
                id: 0,
                icon: null,
                onClick: () => this.clearTextArea(),
            },
        ];
        return (
            <header className="create-link-comment__header">
                <div className="create-link-comment__header-container">
                    <div className="create-link-comment__header-block">
                        <span onClick={this.goBack}>
                            <Icon iconName={'arrow-back'} />
                        </span>
                        <h4 className="create-link-comment__header-title">
                            {this.props.title || 'Новая ссылка'}
                        </h4>
                    </div>
                    <ContextMenu items={contextMenuItems} iconColor="#000" />
                </div>
            </header>
        );
    }
}


export default withRouter(CreateLinkCommentHeader);
