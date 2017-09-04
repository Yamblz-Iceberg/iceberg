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

    renderResult() {
        const { result, loader, searchText } = this.props;

        if (result.collections.length !== 0) {
            return (
                <div className="search-result__info">
                    <div className="search-result__count">
                        <p>Найдено {result.collections.length} подборки</p>
                    </div>
                    <div className="search-result__list">
                        {
                            result.collections.map(item => (
                                <SearchResultItem key={item._id} data={item} />
                            ))
                        }
                    </div>
                </div>
            );
        } else if (!loader) {
            return (
                <div className="search-result__empty-block">
                    <p className="search-result__message">Мы не нашли точных результатов. Создайте тему и люди помогут</p>
                    <Button
                        text="Создать тему"
                        icon={<Icon iconName={'themes'} />}
                    />
                </div>
            );
        } else if (searchText !== '') {
            return (
                <div className="search-result__preloader-wrapper">
                    <div className="search-result__preloader" />
                </div>
            );
        }

        return null;
    }

    render() {
        return (
            <div className="search-container">
                { this.renderResult() }
            </div>
        );
    }
}

SearchResult.propTypes = {
    result: PropTypes.object.isRequired,
    loader: PropTypes.bool.isRequired,
    searchText: PropTypes.string.isRequired,
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
        loader: state.loader,
    };
}

export default connect(mapStateToProps)(SearchResult);
