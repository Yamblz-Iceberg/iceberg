import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Tabs } from '../index';
import HomeFeed from './feed/home-feed';
import HomeHeader from './header/home-header';
import { FloatingButton } from '../../blocks';
import { userLoader } from '../../reducers/user.reducer';
import { registerDemoUser } from '../../reducers/authorization.reducer';
import { generateGuid } from '../../utils/shared-functions';
import { USER_DATA } from '../../config';

import './home.scss';

const tabs = [
    {
        id: 1,
        title: 'Моя лента',
        linkTo: '/feed',
    },
    {
        id: 2,
        title: 'Новое',
        linkTo: '/feed/time',
    },
];

class Home extends Component {
    componentDidMount() {
        this.props.userLoader(this.props.token);
        if (USER_DATA === null
            || USER_DATA.access_token.length === 0) {
            this.authorization();
        }
    }

    componentDidUpdate = () => {
        this.scrollToTop();
    };

    scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    // TODO нужно сделать middleware и убрать нафиг отсюда авторизацию
    authorization = () => {
        const uniqueId = generateGuid();
        const password = generateGuid();
        const saveLocal = () => {
            localStorage.setItem('IcebergUserData', JSON.stringify(this.props.authorization));
        };
        this.props.registerDemoUser(uniqueId, password, saveLocal);
    };

    render() {
        const { user } = this.props;
        return (
            <main className="home">
                <div className="home__floating-header">
                    <HomeHeader user={user} />
                    <Tabs tabs={tabs} />
                </div>
                <FloatingButton />
                <HomeFeed queryParam={this.props.filter} />
            </main>
        );
    }
}

Home.propTypes = {
    user: PropTypes.object,
    authorization: PropTypes.object,
    token: PropTypes.string.isRequired,
    userLoader: PropTypes.func.isRequired,
    registerDemoUser: PropTypes.func.isRequired,
    filter: PropTypes.string,
};

Home.defaultProps = {
    user: {},
    authorization: {},
    filter: 'rating',
};

function mapStateToProps(state) {
    return {
        token: state.authorization.access_token,
        user: state.user.data,
        authorization: state.authorization,
    };
}

export default connect(mapStateToProps, { userLoader, registerDemoUser })(Home);
