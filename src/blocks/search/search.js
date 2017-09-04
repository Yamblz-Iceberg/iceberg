import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchHeader from './header/search-header';
import SearchResult from './result/search-result';

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

function mapStateToProps(state) {
    return {
        search: state.search,
        token: state.app.token,
    };
}

export default connect(mapStateToProps)(Search);
