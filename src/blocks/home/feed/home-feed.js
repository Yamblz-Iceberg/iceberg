import Hypher from 'hypher';
import Ru from 'hyphenation.ru';
import En from 'hyphenation.en-us';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CollectionCard, HashTape } from '../../index';
import { Preloader } from '../../../blocks';

import { feedLoader } from '../../../reducers/feed.reducer';
import { handleClickToCollection } from '../../../utils/shared-functions';

import './home-feed.scss';

const ruText = new Hypher(Ru);
const enText = new Hypher(En);

class HomeFeed extends Component {
    componentDidMount() {
        this.props.feedLoader(this.props.queryParam, this.props.token);
    }

    componentDidUpdate(prevProps) {
        if (this.props.queryParam !== prevProps.queryParam) {
            this.props.feedLoader(this.props.queryParam, this.props.token);
        }
    }

    handlerOnClick = cardId => (e) => {
        handleClickToCollection(e, cardId, this.props.history);
    }

    hyphenateCardNames = collection =>
        collection.map(card => (
            {
                ...card,
                name: enText.hyphenateText(ruText.hyphenateText(card.name, 10), 10),
            }
        ));

    renderFeed = (collectionsCount, tagsCount) => {
        const { tags } = this.props;
        let { collections } = this.props;
        collections = this.hyphenateCardNames(collections);

        const feedToRender = [];

        let collectionsIndex = 0;
        let tagsIndex = 0;

        while (collectionsIndex < collections.length && !this.props.loader) {
            const currentCollections =
                collections.slice(collectionsIndex, collectionsIndex + collectionsCount);
            feedToRender.push(
                currentCollections.map(card => (
                    <div
                        key={card._id}
                        className="home-feed__collection-card"
                        onClick={this.handlerOnClick(card._id)}
                    >
                        <CollectionCard data={card} />
                    </div>
                ),
                ),
            );

            collectionsIndex += collectionsCount;

            if (currentCollections.length === collectionsCount) {
                const currentTags = tags.slice(tagsIndex, tagsIndex + tagsCount);

                const key = Math.random().toString(36);
                feedToRender.push(
                    <div className="home-feed__tape" key={key}>
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

HomeFeed.propTypes = {
    collections: PropTypes.arrayOf(PropTypes.object.isRequired),
    tags: PropTypes.arrayOf(PropTypes.object.isRequired),
    feedLoader: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired,
    queryParam: PropTypes.any.isRequired,
    token: PropTypes.string.isRequired,
    loader: PropTypes.bool.isRequired,
};

HomeFeed.defaultProps = {
    collections: [],
    tags: [],
};

function mapStateToProps(state) {
    return {
        collections: state.feed.collections,
        tags: state.feed.tags,
        token: state.authorization.access_token,
        user: state.user.user,
        loader: state.loader,
    };
}

export default connect(mapStateToProps, { feedLoader })(withRouter(HomeFeed));
