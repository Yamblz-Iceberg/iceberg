import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import ProfileHeader from './header/account-profile-header';
import ProfileFeed from './feed/account-profile-feed';
import { UserInfo, Tabs } from './../../blocks';

import { getCreatedCollections, getSavedLinks } from './../../reducers/bookmarks.reducer';

import './account-profile.scss';

class AccountProfile extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        bookmarks: PropTypes.object.isRequired,
        token: PropTypes.string.isRequired,
        getCreatedCollections: PropTypes.func.isRequired,
        getSavedLinks: PropTypes.func.isRequired,
        history: PropTypes.any.isRequired,
        loader: PropTypes.bool.isRequired,
    }

    componentDidMount() {
        if (this.props.history.location.pathname.indexOf('links') >= 0) {
            this.getSavedLinks();
        } else {
            this.getMyCollections();
        }
    }

    getMyCollections = () => {
        this.props.getCreatedCollections(this.props.token, 'createdCollection');
    }

    getSavedLinks = () => {
        this.props.getSavedLinks(this.props.token, 'savedLinks');
    }

    render() {
        const { user, bookmarks } = this.props;

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

        const linksFilters = [
            {
                id: 0,
                title: 'Новые',
                name: 'newLinks',
            },
            {
                id: 1,
                title: 'Прочитанные',
                name: 'openedLinks',
            },
            {
                id: 2,
                title: 'Добавленные мной',
                name: 'addedLinks',
            },
        ];

        const collectionsFilters = [
            {
                id: 0,
                title: 'Созданные мной',
                name: 'createdCollections',
            },
            {
                id: 1,
                title: 'Сохраненные',
                name: 'savedCollections',
            },
        ];

        const filterItems = this.props.history.location.pathname.indexOf('links') > -1 ? linksFilters : collectionsFilters;
        const data = bookmarks.typeToFeed.toLowerCase().indexOf('links') > -1 ? bookmarks.links : bookmarks.collections;

        return (
            <div className="account-profile-wrap">
                <ProfileHeader />
                <UserInfo user={user} />
                <div className="account-profile__tabs-wrap">
                    <Tabs tabs={tabs} />
                </div>
                <ProfileFeed
                    data={data}
                    type={bookmarks.typeToFeed}
                    filterItems={filterItems}
                    loader={this.props.loader}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.data,
        token: state.authorization.access_token,
        bookmarks: state.bookmarks,
        typeToFeed: state.user.typeToFeed,
        loader: state.loader,
    };
}

export default connect(
    mapStateToProps,
    { getCreatedCollections, getSavedLinks },
)(withRouter(AccountProfile));
