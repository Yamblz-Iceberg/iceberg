import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Icon } from '../../blocks';
import { actions as modalActions } from '../../reducers/modal.reducer';
import { setLinkAsOpened } from '../../reducers/link.reducer';

import './account-profile-feed-item.scss';

class AccountProfileFeedItem extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        type: PropTypes.string.isRequired,
        history: PropTypes.any.isRequired,
        showErrorModal: PropTypes.func.isRequired,
        setLinkAsOpened: PropTypes.func.isRequired,
        token: PropTypes.any.isRequired,
    };

    openLink(href, readerMode) {
        if (typeof window.cordova !== 'undefined') {
            window.SafariViewController.isAvailable((available) => {
                if (available) {
                    window.SafariViewController.show({
                        url: href,
                        hidden: false,
                        animated: false,
                        transition: 'curl',
                        enterReaderModeIfAvailable: readerMode,
                        tintColor: '#fff',
                        barColor: '#000',
                        controlTintColor: '#ffffff',
                    },
                    // success
                    () => {},
                    // error
                    () => {
                        this.props.showErrorModal({
                            title: 'Упс!',
                            text: 'Такая ссылка не существует.',
                            buttonText: 'Понятно',
                        });
                    });
                } else {
                    window.open(href);
                }
            });
        } else {
            window.open(href);
        }
        this.props.setLinkAsOpened(this.props.data._id, this.props.token);
    }

    openCollection(cardId) {
        this.props.history.push({ pathname: `/collection/${cardId}` });
    }

    handleOnErrorFavicon = (e) => {
        e.target.style.display = 'none';
    };

    render() {
        const { data, type } = this.props;
        const resultStyles = {
            backgroundImage: `url(${data.photo})`,
            backgroundColor: data.color,
        };

        const collection = (<div className="account-profile-feed-collection" onClick={() => this.openCollection(data._id)}>
            <div className="account-profile-feed-collection__photo-wrapper">
                <div className="account-profile-feed-collection__photo" style={resultStyles} />
                { data.closed && (
                    <span className="account-profile-feed-collection__lock-icon-wrapper">
                        <Icon iconColor="white" iconName="lock" />
                    </span>
                ) }
            </div>
            <div className="account-profile-feed-collection__details">
                <h5 className="account-profile-feed-collection__title">{data.name || 'Нет названия'}</h5>
                <div className="account-profile-feed-collection__links-container">
                    <Icon iconName={'link'} iconWidth="24" iconHeight="24" iconColor="#d0d0d0" />
                    <p className="account-profile-feed-collection__linksCount"> {data.linksCount || 0}</p>
                </div>
            </div>
        </div>);

        const link = (<div className="account-profile-feed-link" onClick={() => this.openLink(data.url)}>
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

export default
connect(
    state => ({
        token: state.authorization.access_token,
    }),
    { ...modalActions, setLinkAsOpened },
)(withRouter(AccountProfileFeedItem));
