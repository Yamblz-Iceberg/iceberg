import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Button } from '../';
import AuthorizationModal from './__modal/authorization__modal';
import { CLIENT_ID, CLIENT_SECRET, SERVER, YANDEX_APP_ID } from '../../config';
import { addRealUser } from '../../reducers/authorization.reducer';
import { hideLoader, showLoader } from '../../reducers/loader.reducer';
import { actions as modalActions } from '../../reducers/modal.reducer';

import './authorization.scss';

class Authorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showIframe: false,
            src: '',
        };
    }
    componentDidMount() {
        window.addEventListener('message', this.messageListener);
    }
    componentWillUnmount() {
        window.removeEventListener('message', this.messageListener);
    }
    messageListener = (event) => {
        if (event.origin !== SERVER) return false;
        try {
            const res = JSON.parse(event.data.replace(/&quot;/g, '"'));
            this.setState({ showIframe: false });
            this.props.addRealUser(res);
            localStorage.setItem('IcebergUserData', JSON.stringify(res));
            this.props.hideLoader();
            alert('Вы успешно авторизованы!');
            // this.goBack();
        } catch (error) {
            console.error('Error while parsing JSON:', error);
        }
        return true;
    };
    logInYandex = () => {
        this.props.showLoader();
        const redirectURI = 'https://iceberg-project.herokuapp.com/register/yandex/callback';
        const userId = this.props.authorization.userId;
        this.setState({
            showIframe: true,
            src: `https://oauth.yandex.ru/authorize?response_type=code&redirect_uri=${redirectURI}&state=${CLIENT_ID},${CLIENT_SECRET},${userId}&client_id=${YANDEX_APP_ID}`,
        });
    };
    logInVK = () => {
        this.props.showModal('ERROR_MESSAGE', { title: 'УПС!', text: 'Авторизация через Вконтакте пока не реализована' });
    };
    logInFB = () => {
        this.props.showModal('ERROR_MESSAGE', { title: 'УПС!', text: 'Авторизация через Facebook пока не реализована' });
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
                    <AuthorizationModal show={this.state.showIframe} src={this.state.src} />
                </div>
            </main>
        );
    }
}

Authorization.propTypes = {
    history: PropTypes.object.isRequired,
    addRealUser: PropTypes.func.isRequired,
    showLoader: PropTypes.func.isRequired,
    hideLoader: PropTypes.func.isRequired,
    authorization: PropTypes.object.isRequired,
    showModal: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        authorization: state.authorization,
    }),
    { addRealUser, showLoader, hideLoader, ...modalActions },
)(withRouter(Authorization));
