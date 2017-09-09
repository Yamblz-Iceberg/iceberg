import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerDemoUser } from '../../reducers/authorization.reducer';
import { generateGuid } from '../../utils/shared-functions';
import { showLoader, hideLoader } from '../../reducers/loader.reducer';
import { addRealUser } from '../../reducers/authorization.reducer';
import { Preloader } from '../';
import { stopAuth } from '../../reducers/app.reducer';

import './middleware.scss';


class Middleware extends Component {
    static authDemoUser = (registerFn, callback) => {
        const userId = generateGuid();
        const userPassword = generateGuid();
        const firstName = 'Демо';
        const lastName = 'Пользователь';
        registerFn(userId, userPassword, firstName, lastName, callback);
    };
    constructor(props) {
        super(props);
        window.handleOpenURL = this.handleUserData;
    }
    componentDidMount() {
        this.props.showLoader();
        if (this.props.authorization.access_token === '') {
            this.constructor.authDemoUser(
                this.props.registerDemoUser,
                this.saveLocal,
            );
        } else if (!this.props.authInProgress) {
            this.props.history.replace('/feed');
        }
    }
    componentWillReceiveProps = (nextProps) => {
        if (this.props.authorization.access_token === '' && nextProps.authorization.access_token !== '') {
            this.props.history.replace('/onboarding');
        } else if (this.props.authorization.access_token !== nextProps.authorization.access_token) {
            this.props.history.replace('/feed');
        }
    };
    componentWillUnmount() {
        this.props.hideLoader();
    }
    saveLocal = () => {
        localStorage.setItem('IcebergUserData', JSON.stringify(this.props.authorization));
    };
    handleUserData = (url) => {
        setTimeout(() => {
            window.SafariViewController.hide();
            const authData = {
                access_token: /access_token=([^&]+)/.exec(url)[1],
                refresh_token: /refresh_token=([^&]+)/.exec(url)[1],
                expires_in: /expires_in=([^&]+)/.exec(url)[1],
                token_type: /token_type=([^&]+)/.exec(url)[1],
            };
            this.props.addRealUser(authData);
            this.props.stopAuth();
            localStorage.setItem('IcebergUserData', JSON.stringify(authData));
            const returnToAfterAuth = localStorage.getItem('returnToAfterAuth');
            if (returnToAfterAuth !== null) {
                localStorage.removeItem('returnToAfterAuth');
                this.props.history.push(returnToAfterAuth);
            }
        },
        0);
    };
    render() {
        return (
            <main className="middleware">
                {this.props.loader ? <Preloader /> : null}
            </main>
        );
    }
}

Middleware.propTypes = {
    registerDemoUser: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    showLoader: PropTypes.func.isRequired,
    hideLoader: PropTypes.func.isRequired,
    addRealUser: PropTypes.func.isRequired,
    stopAuth: PropTypes.func.isRequired,
    authorization: PropTypes.object.isRequired,
    loader: PropTypes.bool.isRequired,
    authInProgress: PropTypes.bool.isRequired,
};

export default connect(
    state => ({
        authorization: state.authorization,
        loader: state.loader,
        authInProgress: state.app.authInProgress,
    }),
    { registerDemoUser, addRealUser, showLoader, hideLoader, stopAuth },
)(withRouter(Middleware));
