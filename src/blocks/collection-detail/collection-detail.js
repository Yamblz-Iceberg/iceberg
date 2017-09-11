import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Tabs, CollectionDetailLinks, Button, Icon } from '../';
import CollectionDetailInfo from './info/collection-detail-info';
import CollectionDetailHeader from './header/collection-detail-header';
import { getCollection } from '../../reducers/collection.reducer';

import { socialSharing } from '../../utils/shared-functions';
import { putTags } from '../../services/personal-tags.service';

import './collection-detail.scss';

class CollectionDetail extends Component {
    static propTypes = {
        params: PropTypes.object.isRequired,
        collection: PropTypes.object.isRequired,
        getCollection: PropTypes.func.isRequired,
        token: PropTypes.string.isRequired,
        history: PropTypes.object.isRequired,
        userData: PropTypes.object.isRequired,
    };
    constructor(props) {
        super(props);

        this.state = {
            showAllText: false,
        };
    }

    componentDidMount() {
        this.props.getCollection(this.props.params.id, this.props.token);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.collection.tags.length !== 0) {
            const tags = nextProps.collection.tags.map(tag => (tag._id));
            putTags(tags, this.props.token);
        }
    }

    createLink = () => {
        if (this.props.userData.accType === 'demo') {
            this.props.history.replace({ pathname: '/create-link' });
        } else {
            localStorage.setItem('returnToAfterAuth', this.props.history.location.pathname);
            this.props.history.push('/authorization');
        }
    };

    shareLink = (title, message) => () => {
        socialSharing(title, message);
    };

    render() {
        const {
            collection,
            userData,
            params: {
                id, filter,
            },
        } = this.props;

        const {
            name,
            description,
            links,
        } = collection;

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
        ];

        return (
            <div className="collection-detail">
                <CollectionDetailHeader
                    collectionTitle={name}
                    shareLink={this.shareLink(name, description)}
                />
                <CollectionDetailInfo collection={collection} />
                { links.length > 0
                    // Когда в подборке есть ссылки
                    ? (
                        <div>
                            <div className="collection-detail-tabs">
                                <Tabs tabs={tabs} />
                            </div>
                            <CollectionDetailLinks
                                links={links}
                                filter={filter}
                            />
                            {/* Показывать кнопку добавления ссылки только автору подборки */}
                            { collection.author.userId === userData.userId
                                ? <div className="collection-detail__add-button" onClick={this.createLink} >
                                    <Button
                                        icon={<Icon iconName={'link'} />}
                                        text="добавить ссылку"
                                        type="max-width"
                                    />
                                </div>
                                : null }
                        </div>
                    )
                    // Когда в подборке пока нет ссылок (подборка видна только автору)
                    : (
                        <div className="collection-detail__mesage-wrapper">
                            <h3 className="collection-detail__title">Ссылок пока нет</h3>
                            <div>
                                {/* Текст для открытой подборки, для приватной будет другой */}
                                <p className="collection-detail__text">
                                    Начните добавлять ссылки и ваша подборка появится в общей ленте
                                </p>
                                <div className="collection-detail__add-button" onClick={this.createLink} >
                                    <Button
                                        icon={<Icon iconName={'link'} />}
                                        text="добавить ссылку"
                                        type="max-width"
                                    />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default connect(
    state => ({
        collection: state.collection,
        token: state.authorization.access_token,
        userData: state.user.data,
    }),
    { getCollection },
)(withRouter(CollectionDetail));
