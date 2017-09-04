import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AccountProfileFeedItem from './../feed-item/account-profile-feed-item';

import './account-profile-feed.scss';

class AccountProfileFeed extends Component {
    render() {
        const { data, type } = this.props;
        const emptyResult = (
            <div className="account-profile-feed__empty-block">
                <p className="account-profile-feed__message">Здесь пока пусто</p>
            </div>
        );

        const resultToRender = data.length ? (
            <div className="account-profile-feed__list">
                {
                    data.map(item => (
                        <AccountProfileFeedItem key={item._id} data={item} type={type} />
                    ))
                }
            </div>
        ) : emptyResult;

        return resultToRender;
    }
}

AccountProfileFeed.propTypes = {
    data: PropTypes.array,
    type: PropTypes.string.isRequired,
};

AccountProfileFeed.defaultProps = {
    data: [],
};

export default AccountProfileFeed;
