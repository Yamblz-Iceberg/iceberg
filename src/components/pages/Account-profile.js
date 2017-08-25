import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { UserInfo } from './../blocks';
import { Tabs } from './../blocks';

const tabs = [
    {
        id: 1,
        title: 'Мой лист',
        linkTo: '/profile',
    },
    {
        id: 2,
        title: 'Темы',
        linkTo: '/profile/themes',
    },
    {
        id: 3,
        title: 'Эксперты',
        linkTo: '/profile/experts',
    },
];

class AccountProfile extends Component {
    onElementClick = e => (e);
    render() {
        const { user } = this.props;
        return (<div className="main-wrap">
            <UserInfo user={user} />
            <Tabs tabs={tabs} />
            <Switch>
                <Route exact path="/profile">
                    <h1>Мой лист</h1>
                </Route>
                <Route path="/profile/themes">
                    <h1>Темы</h1>
                </Route>
                <Route path="/profile/experts">
                    <h1>Эксперты</h1>
                </Route>
            </Switch>
        </div>);
    }
}

AccountProfile.propTypes = {
    user: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(AccountProfile);
