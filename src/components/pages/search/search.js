import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SearchHeader } from './../../blocks';

class Search extends Component {
    onElementClick = e => (e);
    render() {
        return (<div className="main-wrap">
            <SearchHeader />
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.data,
    };
}

export default connect(mapStateToProps)(Search);
