import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon } from '../../../blocks';

import './user-profile__header.scss';

class ProfileHeader extends Component {
    goBack = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <header className="user-profile__header">
                <div className="user-profile__header-container">
                    <div className="user-profile__header-block" onClick={this.goBack}>
                        <Icon iconName="arrow-back" iconColor="#fff" />
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
