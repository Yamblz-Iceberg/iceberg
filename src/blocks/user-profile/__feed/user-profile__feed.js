import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Preloader } from './../../../blocks';
import UserProfileFeedItem from './../__feed-item/user-profile__feed-item';

import './user-profile__feed.scss';

class AccountProfileFeed extends Component {
    renderFeed = () => {
        const { data, loader } = this.props;
        if (loader) {
            return (
                <div className="user-profile-feed__preloader">
                    <Preloader />
                </div>
            );
        } else if (data.length) {
            return (
                <div>
                    <div className="user-profile-feed__list">
                        {
                            data.map(item => <UserProfileFeedItem key={item._id} data={item} />)
                        }
                    </div>
                </div>
            );
        }

        return (
            <div className="user-profile-feed__empty-block">
                <p className="user-profile-feed__message">Здесь пока пусто</p>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderFeed()}
            </div>
        );
    }
}

AccountProfileFeed.propTypes = {
    data: PropTypes.array,
    loader: PropTypes.bool.isRequired,
};

AccountProfileFeed.defaultProps = {
    data: [],
};

export default AccountProfileFeed;
