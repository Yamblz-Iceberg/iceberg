import Hypher from 'hypher';
import Ru from 'hyphenation.ru';
import En from 'hyphenation.en-us';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Preloader, CollectionCard, HashTape } from './../../blocks';

import { feedLoader } from './../../reducers/feed.reducer';

import { handleClickToCollection } from './../../utils/shared-functions';

import './home-feed.scss';

/**
 * Словари для русского и английского языков
 * для управления переносами в заголовках если не влазит текст в блок
 */
const ruText = new Hypher(Ru);
const enText = new Hypher(En);

/**
 * Компонент ленты главного экрана приложения.
 * Используется как для фильтрации по рейтингу коллекций, так и для по дате их создания.
 * Состоит из коллекций и хэштегов.
 */
class HomeFeed extends Component {
    static propTypes = {
        collections: PropTypes.arrayOf(PropTypes.object.isRequired),
        tags: PropTypes.arrayOf(PropTypes.object.isRequired),
        feedLoader: PropTypes.func.isRequired,
        history: PropTypes.any.isRequired,
        queryParam: PropTypes.any.isRequired,
        token: PropTypes.string.isRequired,
        loader: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        collections: [],
        tags: [],
    };

    componentDidMount() {
        this.props.feedLoader(this.props.queryParam, this.props.token);
    }

    componentDidUpdate(prevProps) {
        if (this.props.queryParam !== prevProps.queryParam) {
            this.props.feedLoader(this.props.queryParam, this.props.token);
        }
    }

    openCollection = cardId => (e) => {
        handleClickToCollection(e, cardId, this.props.history);
    }

    /**
     * Обработка заголовков коллекций для проставления мягких переносов
     */
    hyphenateCardNames = collections =>
        collections.map(collection => (
            {
                ...collection,
                name: enText.hyphenateText(ruText.hyphenateText(collection.name, 10), 10),
            }
        ));

    /**
     * Формирование ленты
     * @param {number} separator - после какой коллекции добавлять хэштеги
     * @param {number} tagsCount - сколько тегов в блоке
     */
    renderFeed = (separator, tagsCount) => {
        const { tags } = this.props;
        const collections = this.hyphenateCardNames(this.props.collections);
        const feedToRender = [];

        let collectionIndex = 0;
        let tagsIndex = 0;

        while (collectionIndex < collections.length && !this.props.loader) {
            const collection = collections[collectionIndex];
            feedToRender.push(
                <div
                    key={collection._id}
                    className="home-feed__collection"
                    onClick={this.openCollection(collection._id)}
                >
                    <CollectionCard data={collection} />
                </div>,
            );

            collectionIndex += 1;

            if (collectionIndex % separator === 0) {
                const currentTags = tags.slice(tagsIndex, tagsIndex + tagsCount);
                feedToRender.push(
                    <div className="home-feed__hashtags" key={`hashtape-${tagsIndex}`}>
                        <HashTape hashes={currentTags} size="big" />
                    </div>,
                );

                tagsIndex += tagsCount;
            }
        }
        return feedToRender;
    };

    render() {
        return (
            <div className="home-feed">
                {
                    this.props.loader ? <Preloader /> : this.renderFeed(6, 3)
                }
            </div>
        );
    }
}

export default connect(
    state => ({
        collections: state.feed.collections,
        tags: state.feed.tags,
        token: state.authorization.access_token,
        user: state.user.user,
        loader: state.loader,
    }),
    { feedLoader },
)(withRouter(HomeFeed));
