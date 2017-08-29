import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SearchHeader, Modal } from './../../blocks';
import { SearchResult } from './../../parts';

import './search.scss';

class Search extends Component {
    onElementClick = e => (e);
    render() {
        return (<div className="search-wrap">
            <Modal type={'ERROR_MESSAGE'} />
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
