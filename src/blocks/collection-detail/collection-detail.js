import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Tabs, CollectionDetailLinks, Button, Icon } from '../';
import CollectionDetailInfo from './info/collection-detail-info';
import CollectionDetailHeader from './header/collection-detail-header';
import { collectionLoader } from '../../reducers/collection.reducer';

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
        this.props.collectionLoader(this.props.location.state, this.props.token);
    }

    componentWillReceiveProps(props) {
        this.setState({ collection: props.collection });
    }

    createLink = () => {
        this.props.history.push({ pathname: './create-link' });
    };

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
            <div className="collection-detail">
                <CollectionDetailHeader collectionTitle={this.state.collection.name} />
                <CollectionDetailInfo collection={this.state.collection} />

                <div className="collection-detail-tabs">
                    <Tabs tabs={tabs} />
                </div>
                <Switch>
                    <Route
                        exact
                        path="/collection-detail"
                        render={() => (
                            <CollectionDetailLinks links={this.state.collection.links} />
                        )}
                    />
                    <Route
                        path="/collection-detail/:filter?"
                        render={({ match }) => (
                            <CollectionDetailLinks
                                links={this.state.collection.links}
                                filter={match.params.filter}
                            />
                        )}
                    />
                </Switch>
                <div className="collection-detail__add-button" onClick={this.createLink} >
                    <Button icon={<Icon iconName={'link'} />} text="добавить ссылку" />
                </div>
            </div>
        );
    }
}

CollectionDetail.propTypes = {
    collection: PropTypes.object.isRequired,
    collectionLoader: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
};

export default connect(
    state => ({
        collection: state.collection,
        token: state.app.token,
    }),
    { collectionLoader },
)(withRouter(CollectionDetail));
