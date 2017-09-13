import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AccountProfileFeedItem, Preloader } from '../../blocks';
import AccountProfileFilter from './__filter/account-profile__filter';

import './account-profile-feed.scss';

class AccountProfileFeed extends Component {
    static propTypes = {
        data: PropTypes.array,
        type: PropTypes.string.isRequired,
        filterItems: PropTypes.array.isRequired,
        loader: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        data: [],
    };

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
    };

    render() {
        return (
            <div>
                <AccountProfileFilter items={this.props.filterItems} />
                {this.renderFeed()}
            </div>
        );
    }
}

export default AccountProfileFeed;
