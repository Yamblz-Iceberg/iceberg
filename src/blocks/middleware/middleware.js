import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerDemoUser } from '../../reducers/authorization.reducer';
import { generateGuid } from '../../utils/shared-functions';
import { USER_DATA } from '../../config';

import './middleware.scss';
import { showLoader, hideLoader } from '../../reducers/loader.reducer';
import { Preloader } from '../';

class Middleware extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOnboarding: false,
        };
    }
    componentDidMount() {
        this.props.showLoader();
        if (USER_DATA === null
            || USER_DATA.access_token.length === 0) {
            this.authorization();
        } else {
            this.navigateTo();
        }
    }
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.authorization.access_token.length > 0) {
            this.navigateTo();
        }
    };
    componentWillUnmount() {
        this.props.hideLoader();
    }
    navigateTo = () => {
        if (!this.state.showOnboarding) {
            this.props.history.replace('/feed');
        }
    };
    authorization = () => {
        const uniqueId = generateGuid();
        const password = generateGuid();
        const firstName = 'Демо';
        const lastName = 'Пользователь';
        const saveLocal = () => {
            localStorage.setItem('IcebergUserData', JSON.stringify(this.props.authorization));
        };
        this.props.registerDemoUser(uniqueId, password, firstName, lastName, saveLocal);
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
    authorization: PropTypes.object.isRequired,
    loader: PropTypes.bool.isRequired,
};

export default connect(
    state => ({
        authorization: state.authorization,
        loader: state.loader,
    }),
    { registerDemoUser, showLoader, hideLoader },
)(withRouter(Middleware));
