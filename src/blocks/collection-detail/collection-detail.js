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
        const {
            collection,
            userId,
            params: {
                id, filter,
            },
        } = this.props;

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
                <CollectionDetailHeader collectionTitle={collection.name} />
                <CollectionDetailInfo collection={collection} />

                { collection.links.length > 0
                    ? (
                        <div>
                            <div className="collection-detail-tabs">
                                <Tabs tabs={tabs} />
                            </div>
                            <CollectionDetailLinks
                                links={collection.links}
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
                    )
                    : (
                        <div className="collection-detail__mesage-wrapper">
                            <h3 className="collection-detail__title">Ссылок пока нет</h3>
                            { collection.author.userId === userId
                                ? (
                                    <div>
                                        <p className="collection-detail__text">
                                            Поделитесь своей подборкой, и, возможно,
                                            друзья посоветуют вам чего-то полезного
                                        </p>
                                        <div className="collection-detail__add-button" onClick={this.createLink} >
                                            <Button
                                                icon={<Icon iconName={'share'} />}
                                                text="поделиться"
                                                type="max-width"
                                            />
                                        </div>
                                    </div>
                                )
                                : (
                                    <div>
                                        <p className="collection-detail__text">
                                            Добавьте ссылку сами или поделитесь с
                                            друзьями и они посоветуют что-то полезное
                                        </p>
                                        <div className="collection-detail__add-button" onClick={this.createLink} >
                                            <Button
                                                icon={<Icon iconName={'link'} />}
                                                text="добавить ссылку"
                                                type="max-width"
                                            />
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
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
    userId: PropTypes.string.isRequired,
};

export default connect(
    state => ({
        collection: state.collection,
        userId: state.user.data.userId,
        token: state.app.token,
    }),
    { collectionLoader },
)(withRouter(CollectionDetail));
