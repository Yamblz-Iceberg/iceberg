import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Button, Icon, Preloader } from '../../../blocks';
import SearchResultItem from '../__result-item/search__result-item';

import './search__result.scss';

class SearchResult extends Component {
    static propTypes = {
        result: PropTypes.object.isRequired,
        loader: PropTypes.bool.isRequired,
        searchText: PropTypes.string.isRequired,
        history: PropTypes.any.isRequired,
        userData: PropTypes.object.isRequired,
    };

    static defaultProps = {
        result: {
            collections: [],
        },
    };

    constructor(props) {
        super(props);
        const { result } = this.props;
        this.state = result;
    }

    createNewCollection = () => {
        if (typeof this.props.userData.accType !== 'undefined' && this.props.userData.accType !== 'demo') {
            this.props.history.push({ pathname: '/create-empty-card' });
        } else {
            localStorage.setItem('returnToAfterAuth', this.props.history.location.pathname);
            this.props.history.push('/authorization');
        }
    };

    renderResult() {
        const { result, loader, searchText } = this.props;

        if (result.collections.length !== 0) {
            return (
                <div className="search-result__info">
                    <div className="search-result__list">
                        {
                            result.collections.map(item => (
                                <SearchResultItem key={item._id} data={item} />
                            ))
                        }
                    </div>
                </div>
            );
        } else if (searchText !== '') {
            if (!loader) {
                return (
                    <div className="search-result__empty-block">
                        <p className="search-result__message">Мы не нашли точных результатов. Создайте тему и люди помогут</p>
                        <Button
                            text="Создать тему"
                            icon={<Icon iconName="theme" />}
                            onClick={this.createNewCollection}
                        />
                    </div>
                );
            }
            return (
                <div className="search-result__preloader-wrapper">
                    <Preloader />
                </div>
            );
        } else if (searchText === '') {
            return (
                <div className="search-result__empty-block">
                    <p className="search-result__message">
                        Ищите по названиям подборок или категориям.
                        Чтобы искать по категориям, поставьте знак # перед запросом.
                    </p>
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

export default connect(
    state => ({
        searchText: state.search.text,
        result: state.search.result,
        loader: state.loader,
        userData: state.user.data,
    }),
)(withRouter(SearchResult));
