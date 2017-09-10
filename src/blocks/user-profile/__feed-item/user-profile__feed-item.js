import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Icon } from './../..';

import './user-profile__feed-item.scss';

class UserProfileFeedItem extends Component {
    openCollection(e, cardId) {
        this.props.history.push({ pathname: `/collection/${cardId}` });
    }

    render() {
        const { data } = this.props;
        const resultStyles = {
            backgroundImage: `url(${data.photo})`,
            backgroundColor: data.color,
        };

        const collection = (<div className="user-profile-feed-collection" onClick={e => this.openCollection(e, data._id)}>
            <div className="user-profile-feed-collection__photo" style={resultStyles} />
            <div className="user-profile-feed-collection__details">
                <h5 className="user-profile-feed-collection__title">{data.name || 'Нет названия'}</h5>
                <div className="user-profile-feed-collection__links-container">
                    <Icon iconName={'link'} iconWidth="24" iconHeight="24" iconColor="#d0d0d0" />
                    <p className="user-profile-feed-collection__linksCount"> {data.linksCount || 0}</p>
                </div>
            </div>
        </div>);

        return collection;
    }
}

UserProfileFeedItem.propTypes = {
    data: PropTypes.object.isRequired,
    history: PropTypes.any.isRequired,
};

export default
withRouter(UserProfileFeedItem);
