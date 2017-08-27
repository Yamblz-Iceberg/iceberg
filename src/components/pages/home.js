import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Tabs, HomeHeader } from './../blocks';
import { Feed } from './../part';
import { userLoader } from './../../reducers/user.reducer';

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
