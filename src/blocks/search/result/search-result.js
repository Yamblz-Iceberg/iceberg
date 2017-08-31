import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Icon } from '../../../blocks';

import './search-result.scss';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        const { search } = this.props;
        this.state = search;
    }

    render() {
        const { search } = this.props;
        const emptyButtonIcon = (
            <Icon iconName={'themes'} />
        );
        const emptyResult = (
            <div className="search-result__empty-block">
                <p className="search-result__message">Мы не нашли точных результатов. Создайте тему и люди помогут</p>
                <Button text="Создать тему" icon={emptyButtonIcon} />
            </div>
        );
        return (
            <div className="search-container">
                {
                    search.text.length ? emptyResult : null
                }
            </div>
        );
    }
}

SearchResult.propTypes = {
    search: PropTypes.object,
};

SearchResult.defaultProps = {
    search: {},
};

function mapStateToProps(state) {
    return {
        search: state.search,
    };
}

export default connect(mapStateToProps)(SearchResult);
