import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Tabs } from '../index';
import HomeFeed from './feed/home-feed';
import HomeHeader from './header/home-header';
import { FloatingButton } from '../../blocks';
import { userLoader } from '../../reducers/user.reducer';

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
        linkTo: '/feed/new',
    },
];

class Home extends Component {
    componentDidMount() {
        this.props.userLoader(this.props.token);
    }

    componentDidUpdate = () => {
        this.scrollToTop();
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        const { user } = this.props;
        return (
            <main className="home">
                <div className="home__floating-header">
                    <HomeHeader user={user} />
                    <Tabs tabs={tabs} />
                </div>
                <FloatingButton />
                <Switch>
                    <Route
                        exact
                        path="/feed"
                        render={() => (
                            <HomeFeed queryParam="rating" />
                        )}
                    />

                    <Route
                        path="/feed/new"
                        render={() => (
                            <HomeFeed queryParam="time" />
                        )}
                    />
                </Switch>
            </main>
        );
    }
}

Home.propTypes = {
    user: PropTypes.object,
    token: PropTypes.string.isRequired,
    userLoader: PropTypes.func.isRequired,
};

Home.defaultProps = {
    user: {},
};

function mapStateToProps(state) {
    return {
        token: state.app.token,
        user: state.user.data,
    };
}

export default connect(mapStateToProps, { userLoader })(Home);
