import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Icon, ContextMenu } from '../../../blocks';

import './create-card-description__header.scss';

class CreateCardDescriptionHeader extends Component {
    static propTypes = {
        callback: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
    };

    goBack = () => {
        this.props.history.goBack();
    };

    render() {
        const contextMenuItems = [
            {
                title: 'Очистить',
                id: 0,
                onClick: this.props.callback,
                icon: null,
            },
        ];

        return (
            <header
                className="create-card-description-header"
                data-role="header"
                data-position="fixed"
                data-tap-toggle="false"
                data-update-page-padding="false"
                data-hide-during-focus="false"
            >
                <span
                    className="create-card-description-header__back"
                    onClick={this.goBack}
                >
                    <Icon iconName={'arrow-back'} />
                </span>
                <h4 className="create-card-description-header__title">Описание</h4>
                <div className="create-card-description-header__menu-wrapper">
                    <ContextMenu iconColor="#000" items={contextMenuItems} />
                </div>
            </header>
        );
    }
}

export default withRouter(CreateCardDescriptionHeader);
