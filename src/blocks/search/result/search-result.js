import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Icon } from '../../../blocks';
import SearchResultItem from './../result-item/search-result-item';

import './search-result.scss';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        const { result } = this.props;
        this.state = result;
    }

    render() {
        const { result, searchText } = this.props;

        const emptyButtonIcon = (
            <Icon iconName={'themes'} />
        );

        const emptyResult = (
            <div className="search-result__empty-block">
                <p className="search-result__message">Мы не нашли точных результатов. Создайте тему и люди помогут</p>
                <Button text="Создать тему" icon={emptyButtonIcon} />
            </div>
        );

        const resultToRender = result.collections.length ? (
            <div className="search-result__info">
                <div className="search-result__count">
                    <p>Найдено {result.collections.length} подборки</p>
                </div>
                <div className="search-result__list">
                    {
                        result.collections.map(item => (
                            <SearchResultItem key={item.id} data={item} />
                        ))
                    }
                </div>
            </div>
        ) : emptyResult;

        return (
            <div className="search-container">
                {
                    searchText.length ? resultToRender : null
                }
            </div>
        );
    }
}

SearchResult.propTypes = {
    searchText: PropTypes.string.isRequired,
    result: PropTypes.object.isRequired,
};

SearchResult.defaultProps = {
    result: {
        collections: [],
    },
};

function mapStateToProps(state) {
    return {
        searchText: state.search.text,
        result: state.search.result,
    };
}

export default connect(mapStateToProps)(SearchResult);
