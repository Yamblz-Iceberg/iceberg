import React from 'react';
import PropTypes from 'prop-types';

import AccountProfileFeedItem from './../feed-item/account-profile-feed-item';
import ProfileFilter from './../filter/account-profile-filter';

import './account-profile-feed.scss';

const AccountProfileFeed = ({ data, type, filterItems }) => {
    const emptyResult = (
        <div className="account-profile-feed__empty-block">
            <p className="account-profile-feed__message">Здесь пока пусто</p>
        </div>
    );
    const resultToRender = data.length ? (
        <div>
            <div className="account-profile-feed__list">
                {
                    data.map(item => (
                        <AccountProfileFeedItem key={item._id} data={item} type={type} />
                    ))
                }
            </div>
        </div>
    ) : emptyResult;

    return (
        <div>
            <ProfileFilter items={filterItems} />
            {resultToRender}
        </div>
    );
};

AccountProfileFeed.propTypes = {
    data: PropTypes.array,
    type: PropTypes.string.isRequired,
    filterItems: PropTypes.array.isRequired,
};

AccountProfileFeed.defaultProps = {
    data: [],
};

export default AccountProfileFeed;
