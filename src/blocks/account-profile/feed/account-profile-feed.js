import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AccountProfileFeedItem from './../feed-item/account-profile-feed-item';
import ProfileFilter from './../filter/account-profile-filter';

import { Preloader } from './../../../blocks';

import './account-profile-feed.scss';

class AccountProfileFeed extends Component {
    renderFeed = () => {
        const { data, type, loader } = this.props;

        if (loader) {
            return (
                <div className="account-profile-feed__preloader">
                    <Preloader />
                </div>
            );
        } else if (data.length) {
            return (
                <div>
                    <div className="account-profile-feed__list">
                        {
                            data.map(item => (
                                <AccountProfileFeedItem key={item._id} data={item} type={type} />
                            ))
                        }
                    </div>
                </div>
            );
        }

        return (
            <div className="account-profile-feed__empty-block">
                <p className="account-profile-feed__message">Здесь пока пусто</p>
            </div>
        );
    }

    render() {
        return (
            <div>
                <ProfileFilter items={this.props.filterItems} />
                {this.renderFeed()}
            </div>
        );
    }
}

AccountProfileFeed.propTypes = {
    data: PropTypes.array,
    type: PropTypes.string.isRequired,
    filterItems: PropTypes.array.isRequired,
    loader: PropTypes.bool.isRequired,
};

AccountProfileFeed.defaultProps = {
    data: [],
};

export default AccountProfileFeed;
