import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Icon } from './../..';

import './user-profile__feed-item.scss';

class UserProfileFeedItem extends Component {
    openCollection(cardId) {
        this.props.history.push({ pathname: `/collection/${cardId}` });
    }

    render() {
        const { data } = this.props;
        const resultStyles = {
            backgroundImage: `url(${data.photo})`,
            backgroundColor: data.color,
        };

        return (
            <div className="user-profile__feed-item" onClick={() => this.openCollection(data._id)}>
                <div className="user-profile__feed-item-photo" style={resultStyles} />
                <div className="user-profile__feed-item-details">
                    <h5 className="user-profile__feed-item-title">{data.name || 'Нет названия'}</h5>
                    <div className="user-profile__feed-item-links-container">
                        <Icon iconName={'link'} iconColor="#d0d0d0" />
                        <p className="user-profile__feed-item-linksCount"> {data.linksCount || 0}</p>
                    </div>
                </div>
            </div>
        );
    }
}

UserProfileFeedItem.propTypes = {
    data: PropTypes.object.isRequired,
    history: PropTypes.any.isRequired,
};

export default
withRouter(UserProfileFeedItem);
