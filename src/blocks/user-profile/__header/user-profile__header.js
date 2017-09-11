import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon, ContextMenu } from '../../../blocks';

import './user-profile__header.scss';

class ProfileHeader extends Component {
    goBack = () => {
        this.props.history.goBack();
    }
    render() {
        const contextMenuItems = [
            {
                title: 'Подписаться',
                id: 0,
                onClick: () => { },
                icon: <Icon iconName={'save-big'} />,
            },
        ];
        return (
            <header className="profile-header">
                <div className="profile-header__container">
                    <div className="profile-header__block" onClick={this.goBack}>
                        <Icon iconName="arrow-back" iconColor="#fff" />
                    </div>
                    <div className="profile-header__block">
                        <ContextMenu iconName={'more-vert'} iconColor="#fff" items={contextMenuItems} />
                    </div>
                </div>
            </header>
        );
    }
}

ProfileHeader.propTypes = {
    history: PropTypes.object.isRequired,
};

export default connect(
    state => ({ authorization: state.authorization }),
)(withRouter(ProfileHeader));
