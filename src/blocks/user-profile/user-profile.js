import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserProfileHeader from './__header/user-profile__header';
import UserProfileFeed from './__feed/user-profile__feed';
import { UserInfo } from './../../blocks';

import { userLoader, collectionsLoader } from './../../reducers/another-user.reducer';

import './user-profile.scss';

/*
Компонент экрана профиля другого пользователя, в нём отображается информация о пользователе,
а также список его открытых подборок.
 */
class UserProfile extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        collections: PropTypes.array,
        token: PropTypes.any.isRequired,
        userLoader: PropTypes.func.isRequired,
        collectionsLoader: PropTypes.func.isRequired,
        params: PropTypes.object.isRequired,
        loader: PropTypes.any.isRequired,
    };

    static defaultProps = {
        collections: [],
    }

    componentDidMount() {
        this.props.userLoader(this.props.token, this.props.params.id);
        this.getCollections();
    }

    getCollections = () => {
        this.props.collectionsLoader(this.props.token, this.props.params.id);
    };

    render() {
        const { user, collections, loader } = this.props;
        return (
            <div className="user-profile__wrapper">
                <UserProfileHeader />
                <UserInfo user={user} />
                <div className="user-profile__title">
                    <p>Подборки пользователя</p>
                </div>
                <UserProfileFeed
                    data={collections}
                    loader={loader}
                />
            </div>
        );
    }
}

export default connect(
    state => ({
        user: state.anotherUser.data,
        collections: state.anotherUser.collections,
        token: state.authorization.access_token,
        bookmarks: state.bookmarks,
        typeToFeed: state.user.typeToFeed,
        loader: state.loader,
    }),
    { userLoader, collectionsLoader },
)(UserProfile);
