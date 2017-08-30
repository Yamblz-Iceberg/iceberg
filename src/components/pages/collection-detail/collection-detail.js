import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Tabs, CollectionDetailLinks } from '../../blocks';
import { CollectionDetailInfo } from '../../parts';
import { collectionLoader } from '../../../reducers/collection.reducer';

import './collection-detail.scss';

class CollectionDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAllText: false,
            collection: {
                description: '',
                photo: '',
                author: {
                    firstName: '',
                    lastName: '',
                    photo: '',
                },
                name: '',
                tags: [],
                links: [],
            },
        };
    }
    componentDidMount() {
        this.props.collectionLoader(this.props.location.state);
    }

    componentWillReceiveProps(props) {
        this.setState({ collection: props.collection });
    }

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
                <CollectionDetailInfo collection={this.state.collection} />

                <div className="collection-detail-tabs">
                    <Tabs tabs={tabs} />
                    <Switch>
                        <Route exact path="/collection-detail" />
                        <Route path="/collection-detail/unread" />
                        <Route path="/collection-detail/new" />
                    </Switch>
                </div>
                <CollectionDetailLinks links={this.state.collection.links} />
            </div>
        );
    }
}

CollectionDetail.propTypes = {
    collection: PropTypes.object.isRequired,
    collectionLoader: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
};

export default connect(
    state => ({ collection: state.collection }),
    { collectionLoader },
)(CollectionDetail);
