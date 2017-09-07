import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
        };
    }
    componentDidMount() {
        this.props.collectionLoader(this.props.params.id, this.props.token);
    }

    createLink = () => {
        this.props.history.push({ pathname: '/create-link' });
    };

    render() {
        const { id, filter } = this.props.params;
        const tabs = [
            {
                id: 1,
                title: ' Все',
                linkTo: `/collection/${id}`,
            },
            {
                id: 2,
                title: 'Непрочитанные',
                linkTo: `/collection/${id}/unread`,
            },
            {
                id: 3,
                title: 'Новое',
                linkTo: `/collection/${id}/new`,
            },
        ];

        return (
            <div className="collection-detail">
                <CollectionDetailHeader collectionTitle={this.props.collection.name} />
                <CollectionDetailInfo collection={this.props.collection} />

                <div className="collection-detail-tabs">
                    <Tabs tabs={tabs} />
                </div>
                <CollectionDetailLinks
                    links={this.props.collection.links}
                    filter={filter}
                />
                <div className="collection-detail__add-button" onClick={this.createLink} >
                    <Button
                        icon={<Icon iconName={'link'} />}
                        text="добавить ссылку"
                        type="max-width"
                    />
                </div>
            </div>
        );
    }
}

CollectionDetail.propTypes = {
    params: PropTypes.object.isRequired,
    collection: PropTypes.object.isRequired,
    collectionLoader: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
};

export default connect(
    state => ({
        collection: state.collection,
        token: state.authorization.access_token,
    }),
    { collectionLoader },
)(withRouter(CollectionDetail));
