import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProfileHeader from './header/account-profile-header';
import { UserInfo, Tabs } from './../../blocks';

import './account-profile.scss';

const tabs = [
    {
        id: 1,
        title: 'Подборки',
        linkTo: '/profile',
    },
    {
        id: 2,
        title: 'Ссылки',
        linkTo: '/profile/links',
    },
];

class AccountProfile extends Component {
    onElementClick = e => (e);
    render() {
        const { user } = this.props;
        return (<div className="account-profile-wrap">
            <ProfileHeader />
            <UserInfo user={user} />
            <div className="account-profile__tabs-wrap">
                <Tabs tabs={tabs} />
            </div>
        </div>);
    }
}

AccountProfile.propTypes = {
    user: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        user: state.user.data,
    };
}

export default connect(mapStateToProps)(AccountProfile);
