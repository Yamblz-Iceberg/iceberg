import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SearchHeader } from './../../blocks';
import { SearchResult } from './../../parts';

import './search.scss';

class Search extends Component {
    onElementClick = e => (e);
    render() {
        return (<div className="search-wrap">
            <SearchHeader />
            <SearchResult />
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.data,
    };
}

export default connect(mapStateToProps)(Search);
