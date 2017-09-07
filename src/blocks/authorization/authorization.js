import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Button } from '../';
import { CLIENT_ID, CLIENT_SECRET, VK_APP_ID, YANDEX_APP_ID, FB_APP_ID } from '../../config';
import { actions as modalActions } from '../../reducers/modal.reducer';

import './authorization.scss';
import { startAuth } from '../../reducers/app.reducer';

class Authorization extends Component {
    /* eslint class-methods-use-this: ["error", { "exceptMethods": ["openLink"] }] */
    openLink(href, readerMode) {
        if (window.cordova) {
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
                        this.props.showModal('ERROR_MESSAGE');
                    });
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
        // this.props.showModal(
        // 'ERROR_MESSAGE', { title: 'УПС!', text: 'Авторизация через Facebook пока не реализована'
        // });
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
                            background="#3b5998"
                            textColor="#fff"
                            onClick={this.logInFB}
                        />
                        <Button
                            text="вконтакте"
                            size="max-width"
                            background="#5181b8"
                            textColor="#fff"
                            onClick={this.logInVK}
                        />
                        <Button text="яндекс" size="max-width" background="#ffcc00" onClick={this.logInYandex} />
                    </section>
                </div>
            </main>
        );
    }
}

Authorization.propTypes = {
    history: PropTypes.object.isRequired,
    authorization: PropTypes.object.isRequired,
    startAuth: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        authorization: state.authorization,
    }),
    { ...modalActions, startAuth },
)(withRouter(Authorization));
