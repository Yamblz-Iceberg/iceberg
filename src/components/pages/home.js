import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Tabs, HomeHeader } from './../blocks';
import { Feed } from './../part';

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
    onElementClick = e => (e);
    render() {
        const { user } = this.props;
        return (<main className="main-wrap">
            <HomeHeader user={user} />
            <Tabs tabs={tabs} />
            <Switch>
                <Route exact path="/feed">
                    <Feed />
                </Route>
                <Route path="/feed/new">
                    <h1>Новое</h1>
                </Route>
            </Switch>
        </main>);
    }
}

Home.propTypes = {
    user: PropTypes.object,
};

Home.defaultProps = {
    user: {},
};

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(Home);
