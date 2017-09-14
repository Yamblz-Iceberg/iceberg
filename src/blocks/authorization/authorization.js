import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Button } from '../';
import { CLIENT_ID, CLIENT_SECRET, VK_APP_ID, YANDEX_APP_ID, FB_APP_ID } from '../../config';
import { actions as modalActions } from '../../reducers/modal.reducer';
import { showSafariViewController } from './../../utils/shared-functions';

import './authorization.scss';
import { startAuth } from '../../reducers/app.reducer';

class Authorization extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        authorization: PropTypes.object.isRequired,
        startAuth: PropTypes.func.isRequired,
        showErrorModal: PropTypes.func.isRequired,
    };
    /* eslint class-methods-use-this: ["error", { "exceptMethods": ["openLink"] }] */
    openLink(href, readerMode) {
        if (window.cordova) {
            window.SafariViewController.isAvailable((available) => {
                if (available) {
                    showSafariViewController(
                        href,
                        readerMode,
                        () => { this.props.showErrorModal(); },
                    );
                } else {
                    window.open(href);
                }
            });
        } else {
            window.open(href);
        }
    }
    logInYandex = () => {
        this.props.startAuth();
        const redirectURI = 'https://iceberg-project.herokuapp.com/register/yandex/callback';
        const userId = this.props.authorization.userId;
        const url = `https://oauth.yandex.ru/authorize?response_type=code&redirect_uri=${redirectURI}&state=${CLIENT_ID},${CLIENT_SECRET},${userId}&client_id=${YANDEX_APP_ID}`;
        this.openLink(url);
    };
    logInVK = () => {
        this.props.startAuth();
        const redirectURI = 'https://iceberg-project.herokuapp.com/register/vk/callback';
        const userId = this.props.authorization.userId;
        const url = `https://oauth.vk.com/authorize?response_type=code&scope=friends&display=mobile&redirect_uri=${redirectURI}&state=${CLIENT_ID},${CLIENT_SECRET},${userId}&client_id=${VK_APP_ID}`;
        this.openLink(url);
    };
    logInFB = () => {
        this.props.startAuth();
        const redirectURI = 'https://iceberg-project.herokuapp.com/register/fb/callback';
        const userId = this.props.authorization.userId;
        const url = `https://www.facebook.com/dialog/oauth?response_type=code&scope=user_friends&redirect_uri=${redirectURI}&state=${CLIENT_ID},${CLIENT_SECRET},${userId}&client_id=${FB_APP_ID}`;
        this.openLink(url);
    };
    goBack = () => {
        this.props.history.goBack();
    };
    render() {
        return (
            <main className="authorization">
                <header className="authorization__header">
                    <span className="authorization__close" onClick={this.goBack}>
                        <Icon iconName={'close'} />
                    </span>
                </header>
                <div className="authorization__wrapper">
                    <section className="authorization__description">
                        <div className="authorization__description-img">
                            <Icon iconName="iceberg" />
                        </div>
                        <div className="authorization__description-text">
                            Сохраняйте подборки ссылок или создавайте свои,
                            чтобы разобраться в какой угодно теме
                        </div>
                    </section>
                    <section className="authorization__actions">
                        <Button
                            text="facebook"
                            size="max-width"
                            type="fb"
                            onClick={this.logInFB}
                        />
                        <Button
                            text="вконтакте"
                            size="max-width"
                            type="vk"
                            onClick={this.logInVK}
                        />
                        <Button
                            text="яндекс"
                            size="max-width"
                            type="yandex"
                            onClick={this.logInYandex}
                        />
                    </section>
                </div>
            </main>
        );
    }
}

export default connect(
    state => ({
        authorization: state.authorization,
    }),
    { ...modalActions, startAuth },
)(withRouter(Authorization));
