import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import ProfileHeader from './header/account-profile-header';
import ProfileFilter from './filter/account-profile-filter';
import ProfileFeed from './feed/account-profile-feed';
import { UserInfo, Tabs } from './../../blocks';

import { savedCollectionsLoader, savedLinksLoader } from './../../reducers/user.reducer';

import './account-profile.scss';

class AccountProfile extends Component {
    componentDidMount() {
        if (this.props.history.location.pathname.indexOf('links') >= 0) {
            this.getSavedLinks();
        } else {
            this.getSavedCollections();
        }
    }

    getSavedCollections = () => {
        this.props.savedCollectionsLoader(this.props.token);
    }

    getSavedLinks = () => {
        this.props.savedLinksLoader(this.props.token);
    }

    render() {
        const { user, archive, typeToFeed } = this.props;
        const tabs = [
            {
                id: 1,
                title: 'Подборки',
                linkTo: '/profile',
                onClick: this.getSavedCollections,
            },
            {
                id: 2,
                title: 'Ссылки',
                linkTo: '/profile/links',
                onClick: this.getSavedLinks,
            },
        ];
        const data = typeToFeed === 'links' ? archive.savedLinks : archive.savedCollections;
        return (<div className="account-profile-wrap">
            <ProfileHeader />
            <UserInfo user={user} />
            <div className="account-profile__tabs-wrap">
                <Tabs tabs={tabs} />
            </div>
            <ProfileFilter />
            <ProfileFeed data={data} type={typeToFeed} />
        </div>);
    }
}

AccountProfile.propTypes = {
    user: PropTypes.object.isRequired,
    archive: PropTypes.object.isRequired,
    typeToFeed: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    savedCollectionsLoader: PropTypes.func.isRequired,
    savedLinksLoader: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired,
};

function mapStateToProps(state) {
    return {
        user: state.user.data,
        token: state.app.token,
        archive: state.user.archive,
        typeToFeed: state.user.typeToFeed,
    };
}

export default
connect(mapStateToProps, { savedCollectionsLoader, savedLinksLoader })(withRouter(AccountProfile));
