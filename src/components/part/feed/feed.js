import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HashTape } from './../../blocks';

import './feed.scss';

class Feed extends Component {
    onElementClick = e => (e);
    render() {
        const { items } = this.props.feed;
        return (<div className="feed-container">
            <div className="hash-tape__container">
                <HashTape hashes={items.hashes} />
            </div>
        </div>);
    }
}

Feed.propTypes = {
    feed: PropTypes.object,
};

Feed.defaultProps = {
    feed: {},
};

function mapStateToProps(state) {
    return {
        feed: state.feed,
    };
}

export default connect(mapStateToProps)(Feed);
