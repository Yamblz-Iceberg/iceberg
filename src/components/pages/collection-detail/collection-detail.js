import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Tabs } from '../../blocks';
import { CollectionDetailInfo } from '../../parts';
// import PropTypes from 'prop-types';

import './collection-detail.scss';

/* eslint-disable */
class CollectionDetail extends Component {
    render() {

        const tabs = [
            {
                id: 1,
                title: ' Все',
                linkTo: '/collection-detail',
            },
            {
                id: 2,
                title: 'Непрочитанные',
                linkTo: '/collection-detail/unread',
            },
            {
                id: 3,
                title: 'Новое',
                linkTo: '/collection-detail/new',
            },
        ];

        return (
            <div>
                <CollectionDetailInfo collectionId={this.props.location.state} />

                <div className="collection-detail-tabs">
                    <Tabs tabs={tabs} />
                    <Switch>
                        <Route exact path="/collection-detail" />
                        <Route path="/collection-detail/unread">
                            <h1>Unread</h1>
                        </Route>
                        <Route path="/collection-detail/new">
                            <h1>Новое</h1>
                        </Route>
                    </Switch>
                </div>

            </div>
        );
    }
}

export default (CollectionDetail);
