import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Feed extends Component {
    onElementClick = e => (e);
    render() {
        const { items } = this.props.feed;
        return (<div className="feed-container">
            {
                items.map(item => (<h1 key={item.id}>{item.title}</h1>))
            }
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
