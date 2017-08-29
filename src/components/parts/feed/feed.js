import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CollectionCard, HashTape } from './../../blocks';

import { loader } from '../../../reducers/feed.reducer';

import './feed.scss';

class Feed extends Component {
    componentDidMount() {
        this.props.loader();
    }

    handlerOnClick(e, cardId) {
        if (e.target.className !== 'hash-tag'
            && e.target.className !== 'template-card-footer__user'
            && e.target.className !== 'template-card-footer__actions') {
            this.props.history.push({ pathname: './collection-detail', state: cardId });
        }
    }

    renderFeed = (cardsCount, tagsCount) => {
        const { cards, tags } = this.props;

        const feedToRender = [];

        let cardsIndex = 0;
        let tagsIndex = 0;

        while (cardsIndex < cards.length) {
            const currentCards = cards.slice(cardsIndex, cardsIndex + cardsCount);

            feedToRender.push(
                currentCards.map(card => (
                    <div
                        key={card._id}
                        className="collection-card-container"
                        onClick={e => this.handlerOnClick(e, card._id)}
                    >
                        <CollectionCard data={card} />
                    </div>
                )),
            );

            cardsIndex += cardsCount;

            if (currentCards.length === cardsCount) {
                const currentTags = tags.slice(tagsIndex, tagsIndex + tagsCount);

                const key = currentTags[0]._id + currentTags[1]._id;
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
            <div className="feed-container">
                { this.renderFeed(6, 3) }
            </div>
        );
    }
}

Feed.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object.isRequired),
    tags: PropTypes.arrayOf(PropTypes.object.isRequired),
    loader: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired,
};

Feed.defaultProps = {
    cards: [],
    tags: [],
};

function mapStateToProps(state) {
    return {
        cards: state.feed.cards,
        tags: state.feed.tags,
        token: state.app.token,
        user: state.user.user,
    };
}

export default connect(mapStateToProps, { loader })(withRouter(Feed));
