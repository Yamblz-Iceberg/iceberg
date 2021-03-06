import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Tabs, Button, Icon, Preloader } from '../../blocks';
import { getCollection, clearDescriptionAction } from '../../reducers/collection.reducer';
import { hideLoader, showLoader } from '../../reducers/loader.reducer';
import { socialSharing } from '../../utils/shared-functions';
import { putTags } from '../../services/personal-tags.service';

import CollectionDetailHeader from './__header/collection-detail__header';
import CollectionDetailCard from './__card/collection-detail__card';
import CollectionDetailLinks from './__links/collection-detail__links';

import './collection-detail.scss';

class CollectionDetail extends Component {
    static propTypes = {
        params: PropTypes.object.isRequired,
        collection: PropTypes.object.isRequired,
        getCollection: PropTypes.func.isRequired,
        token: PropTypes.string.isRequired,
        history: PropTypes.object.isRequired,
        userData: PropTypes.object.isRequired,
        loader: PropTypes.bool.isRequired,
        showLoader: PropTypes.func.isRequired,
        hideLoader: PropTypes.func.isRequired,
        clearDescriptionAction: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getCollection(this.props.params.id, this.props.token);
        this.scrollToTop();
        this.props.showLoader();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.collection.tags.length !== 0
            && this.props.collection.tags !== nextProps.collection.tags) {
            const tags = nextProps.collection.tags.map(tag => (tag._id));
            putTags(tags, this.props.token);
        }
        // Скрываем лоадер, когда получены данные о коллекции детально
        if (this.props.collection.name !== nextProps.collection.name || nextProps.collection.name !== '') {
            this.props.hideLoader();
        }
    }

    componentWillUnmount() {
        this.props.clearDescriptionAction();
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    createLink = () => {
        // если пользователь авторизован - перенаправляем на добавление ссылки
        if (typeof this.props.userData.accType !== 'undefined' && this.props.userData.accType !== 'demo') {
            this.props.history.replace({ pathname: '/create-link' });
        } else {
            // если пользователь не авторизован - перенаправляем на авторизацию
            localStorage.setItem('returnToAfterAuth', this.props.history.location.pathname);
            this.props.history.push('/authorization');
        }
    };

    // поделиться поборкой
    shareLink = (title, message) => () => {
        socialSharing(title, message);
    };

    // проверяем, является ли пользователь автором подборки
    isAuthor = () => this.props.collection.author.userId === this.props.userData.userId;

    emptyCollection = () => (
        // Проверяем, что данные о коллекции детально получены
        // (лоадер скрывает при получении данных)
        this.props.loader
            ? <div className="collection-detail__loader">
                <Preloader />
            </div>
            : (
                <div className="collection-detail__mesage-wrapper">
                    <h3 className="collection-detail__title">Ссылок пока нет</h3>
                    <div>
                        { this.isAuthor() &&
                            (
                                <div>
                                    <p className="collection-detail__text">
                                        { this.props.collection.closed
                                            ? 'Добавьте ссылки, которые вы хотите сохранить только для себя'
                                            : 'Начните добавлять ссылки, и ваша подборка появится в общей ленте' }
                                    </p>
                                </div>
                            )
                        }
                    </div>
                </div>
            )
    );

    render() {
        const {
            collection,
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
                    isAuthor={this.isAuthor()}
                    collectionId={collection._id}
                    shareLink={this.shareLink(name, description)}
                />
                <CollectionDetailCard collection={collection} />
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
                            { this.isAuthor()
                                ? <div className="collection-detail__add-button" onClick={this.createLink} >
                                    <Button
                                        icon={<Icon iconName={'link'} />}
                                        text="добавить ссылку"
                                        size="max-width"
                                    />
                                </div>
                                : null }
                        </div>
                    )
                    // Когда в подборке пока нет ссылок (подборка видна только автору)
                    : this.emptyCollection()
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
        loader: state.loader,
    }),
    { getCollection, clearDescriptionAction, showLoader, hideLoader },
)(withRouter(CollectionDetail));
