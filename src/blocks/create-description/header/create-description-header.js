import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Icon, ContextMenu } from '../../../blocks';

import './create-description-header.scss';

class CreateDescriptionHeader extends Component {
    clearTextArea = () => {
        this.toggleMenu();
        this.props.callback();
    };

    goBack = () => {
        this.props.history.goBack();
    };

    render() {
        const contextMenuItems = [
            {
                title: 'Очистить',
                id: 0,
                onClick: this.clearTextArea,
                icon: null,
            },
        ];

        return (
            <header className="create-description-header">
                <span
                    className="create-description-header__back"
                    onClick={this.goBack}
                >
                    <Icon iconName={'arrow-back'} />
                </span>
                <h4 className="create-description-header__title">Описание</h4>
                <div className="create-description-header__menu-wrapper">
                    <ContextMenu iconColor="#000" items={contextMenuItems} />
                </div>
            </header>
        );
    }
}

CreateDescriptionHeader.propTypes = {
    callback: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

export default withRouter(CreateDescriptionHeader);
