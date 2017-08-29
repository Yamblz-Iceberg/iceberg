import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { UserInfo, ProfileHeader, ListGroup } from './../../blocks';

const menuItems = [
    {
        id: 1,
        title: 'Ссылок посоветовано',
        linkTo: '/profile',
        info: 38,
    },
    {
        id: 2,
        title: 'Тем создано',
        linkTo: '/profile',
        info: 5,
    },
    {
        id: 3,
        title: 'Темы сохранено себе',
        linkTo: '/profile',
        info: 3,
    },
    {
        id: 4,
        title: 'Ссылок сохранено себе',
        linkTo: '/profile',
        info: 16,
    },
];

class AccountProfile extends Component {
    onElementClick = e => (e);
    render() {
        const { user } = this.props;
        return (<div className="main-wrap">
            <ProfileHeader />
            <UserInfo user={user} />
            <ListGroup items={menuItems} />
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
