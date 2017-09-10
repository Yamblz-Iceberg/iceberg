import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import UserProfileHeader from './__header/user-profile__header';
import UserProfileFeed from './__feed/user-profile__feed';
import { UserInfo } from './../../blocks';

import { userLoader, collectionsLoader } from './../../reducers/another-user.reducer';

import './user-profile.scss';

class AccountProfile extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        collections: PropTypes.array.isRequired,
        token: PropTypes.any.isRequired,
        userLoader: PropTypes.func.isRequired,
        collectionsLoader: PropTypes.func.isRequired,
        params: PropTypes.object.isRequired,
        loader: PropTypes.any.isRequired,
    };

    componentDidMount() {
        this.props.userLoader(this.props.token, this.props.params.id);
        this.getCollections();
    }

    getCollections = () => {
        this.props.collectionsLoader(this.props.token, this.props.params.id);
    }

    render() {
        const { user, collections, loader } = this.props;
        return (<div className="user-profile-wrap">
            <UserProfileHeader />
            <UserInfo user={user} />
            <UserProfileFeed
                data={collections}
                loader={loader}
            />
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        user: state.anotherUser.data,
        collections: state.anotherUser.collections,
        token: state.authorization.access_token,
        bookmarks: state.bookmarks,
        typeToFeed: state.user.typeToFeed,
        loader: state.loader,
    };
}

export default
connect(mapStateToProps, { userLoader, collectionsLoader })(withRouter(AccountProfile));
