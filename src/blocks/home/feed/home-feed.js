import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CollectionCard, HashTape } from '../../index';

import { feedLoader } from '../../../reducers/feed.reducer';

import './home-feed.scss';

class HomeFeed extends Component {
    componentDidMount() {
        this.props.feedLoader(this.props.queryParam);
    }

    componentDidUpdate(prevProps) {
        if (this.props.queryParam !== prevProps.queryParam) {
            this.props.feedLoader(this.props.queryParam);
        }
    }

    handlerOnClick(e, cardId) {
        if (e.target.className !== 'hash-tag'
            && e.target.className !== 'template-card-footer__user'
            && e.target.className !== 'template-card-footer__actions') {
            this.props.history.push({ pathname: '/collection-detail', state: cardId });
        }
    }

    renderFeed = (collectionsCount, tagsCount) => {
        const { collections, tags } = this.props;

        const feedToRender = [];

        let collectionsIndex = 0;
        let tagsIndex = 0;

        while (collectionsIndex < collections.length) {
            const currentCollections =
                collections.slice(collectionsIndex, collectionsIndex + collectionsCount);

            feedToRender.push(
                currentCollections.map(card => (
                    <div
                        key={card._id}
                        className="collection-card-container"
                        onClick={e => this.handlerOnClick(e, card._id)}
                    >
                        <CollectionCard data={card} />
                    </div>
                )),
            );

            collectionsIndex += collectionsCount;

            if (currentCollections.length === collectionsCount) {
                const currentTags = tags.slice(tagsIndex, tagsIndex + tagsCount);

                const key = Math.random().toString(36);
                feedToRender.push(
                    <div className="hash-tape__container" key={key}>
                        <HashTape hashes={currentTags} />
                    </div>,
                );

                tagsIndex += tagsCount;
            }
        }
        return feedToRender;
    }

    render() {
        return (
            <div className="home-feed-container">
                { this.renderFeed(6, 3) }
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
};

HomeFeed.defaultProps = {
    collections: [],
    tags: [],
};

function mapStateToProps(state) {
    return {
        collections: state.feed.collections,
        tags: state.feed.tags,
        token: state.app.token,
        user: state.user.user,
    };
}

export default connect(mapStateToProps, { feedLoader })(withRouter(HomeFeed));
