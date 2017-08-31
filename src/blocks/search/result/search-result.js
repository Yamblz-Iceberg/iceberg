import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Icon } from '../../../blocks';
import SearchResultItem from './../result-item/search-result-item';

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
        const result = search.result ? (
            <div className="search-result__info">
                <div className="search-result__count">
                    <p>Найдено {search.result.length} подборки</p>
                </div>
                <div className="search-result__list">
                    {
                        search.result.map(item => (<SearchResultItem key={item.id} data={item} />))
                    }
                </div>
            </div>
        ) : emptyResult;
        return (
            <div className="search-container">
                {
                    search.text.length ? result : null
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
