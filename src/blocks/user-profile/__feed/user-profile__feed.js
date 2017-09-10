import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Preloader, Icon } from './../../../blocks';

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
                            data.map(item => (<div className="account-profile-feed-collection" key={item._id} onClick={e => this.openCollection(e, item._id)}>
                                <div
                                    className="account-profile-feed-collection__photo"
                                    style={
                                        { backgroundImage: `url(${item.photo})`, backgroundColor: item.color }
                                    }
                                />
                                <div className="account-profile-feed-collection__details">
                                    <h5 className="account-profile-feed-collection__title">{item.name || 'Нет названия'}</h5>
                                    <div className="account-profile-feed-collection__links-container">
                                        <Icon iconName={'link'} iconWidth="24" iconHeight="24" iconColor="#d0d0d0" />
                                        <p className="account-profile-feed-collection__linksCount"> {item.linksCount || 0}</p>
                                    </div>
                                </div>
                            </div>))
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
