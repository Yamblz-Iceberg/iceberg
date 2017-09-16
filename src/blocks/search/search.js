import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchHeader from './__header/search__header';
import SearchResult from './__result/search__result';

import './search.scss';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
        };
    }

    render() {
        return (
            <div className="search-wrap">
                <SearchHeader />
                <SearchResult />
            </div>
        );
    }
}

export default connect(
    state => ({
        search: state.search,
        token: state.authorization.access_token,
    }),
)(Search);
