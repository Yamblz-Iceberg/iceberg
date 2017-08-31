import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchHeader from './header/search-header';
import SearchResult from './result/search-result';
import { Modal } from '../index';

import './search.scss';

class Search extends Component {
    onElementClick = e => (e);
    render() {
        return (<div className="search-wrap">
            <Modal />
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
