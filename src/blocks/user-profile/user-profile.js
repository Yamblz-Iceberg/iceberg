import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import UserProfileHeader from './__header/user-profile__header';
import { UserInfo } from './../../blocks';

import { userLoader } from './../../reducers/another-user.reducer';

import './user-profile.scss';

class AccountProfile extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        token: PropTypes.any.isRequired,
        userLoader: PropTypes.func.isRequired,
        params: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.userLoader(this.props.token, this.props.params.id);
    }

    render() {
        const { user } = this.props;
        return (<div className="user-profile-wrap">
            <UserProfileHeader />
            <UserInfo user={user} />
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        user: state.anotherUser.data,
        token: state.authorization.access_token,
        bookmarks: state.bookmarks,
        typeToFeed: state.user.typeToFeed,
        loader: state.loader,
    };
}

export default
connect(mapStateToProps, { userLoader })(withRouter(AccountProfile));
