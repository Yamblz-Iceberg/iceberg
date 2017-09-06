import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Icon } from './../..';

import './account-profile-feed-item.scss';

class AccountProfileFeedItem extends Component {
    handlerOnClick(e, cardId) {
        this.props.history.push({ pathname: `/collection/${cardId}` });
    }

    handleOnErrorFavicon = (e) => {
        e.target.style.display = 'none';
    }

    render() {
        const { data, type } = this.props;
        const resultStyles = {
            backgroundImage: `url(${data.photo})`,
            backgroundColor: data.color,
        };

        const collection = (<div className="account-profile-feed-collection" onClick={e => this.handlerOnClick(e, data._id)}>
            <div className="account-profile-feed-collection__photo" style={resultStyles} />
            <div className="account-profile-feed-collection__details">
                <h5 className="account-profile-feed-collection__title">{data.name || 'Нет названия'}</h5>
                <div className="account-profile-feed-collection__links-container">
                    <Icon iconName={'link'} iconWidth="24" iconHeight="24" iconColor="#d0d0d0" />
                    <p className="account-profile-feed-collection__linksCount"> {data.linksCount || 0}</p>
                </div>
            </div>
        </div>);

        const link = (<div className="account-profile-feed-link" onClick={e => this.handlerOnClick(e, data._id)}>
            <div className="account-profile-feed-link__photo" style={resultStyles} />
            <div className="account-profile-feed-link__details">
                <h5 className="account-profile-feed-link__title">{data.name || 'Нет названия'}</h5>
                <div className="account-profile-feed-link__url-container">
                    { data.favicon && data.favicon.length
                        && (<img src={data.favicon} onError={this.handleOnErrorFavicon} className="account-profile-feed-link__favicon" alt="link_ico" />) }
                    <p className="account-profile-feed-link__url">{data.url}</p>
                </div>
            </div>
        </div>);

        return type.toLowerCase().indexOf('links') > -1 ? link : collection;
    }
}

AccountProfileFeedItem.propTypes = {
    data: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    history: PropTypes.any.isRequired,
};

export default withRouter(AccountProfileFeedItem);
