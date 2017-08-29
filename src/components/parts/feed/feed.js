import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CollectionCard } from './../../blocks';

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

    render() {
        const { cards } = this.props;

        return (
            <div className="feed-container">
                { cards.map(card => (
                    <div
                        key={card._id}
                        className="collection-card-container"
                        onClick={e => this.handlerOnClick(e, card._id)}
                    >
                        <CollectionCard data={card} />
                    </div>
                )) }
                {/* <div className="collection-card-container">
                    <CollectionCard data={cards.cards[0]} />
                </div>

                <div className="hash-tape__container">
                    <HashTape hashes={items.hashes} />
                </div>

                <div className="collection-card-container">
                    <CollectionCard data={cards.cards[1]} />
                </div> */}
            </div>
        );
    }
}

Feed.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object.isRequired),
    loader: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired,
};

Feed.defaultProps = {
    cards: [],
};

function mapStateToProps(state) {
    return {
        cards: state.feed.cards,
        token: state.app.token,
        user: state.user.user,
    };
}

export default connect(mapStateToProps, { loader })(withRouter(Feed));
