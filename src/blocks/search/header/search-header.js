import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import { actions } from '../../../reducers/search.reducer';
import { actions as modalActions } from '../../../reducers/modal.reducer';

import { Icon } from '../../../blocks';

import './search-header.scss';

class SearchHeader extends Component {
    constructor(props) {
        super(props);
        const { search } = this.props;
        this.state = search;
    }

    componentWillMount() {
        this.loadResultDebounced = _.debounce(this.loadResult, 700);
    }

    componentWillReceiveProps(prevProps) {
        if (prevProps.search.text !== this.props.search.text) {
            this.loadResultDebounced();
        }
    }

    loadResult = () => {
        if (this.props.search.text !== '') {
            this.props.searchResultLoader(this.props.search.text, this.props.token);
        }
    }

    handleChangeSearch = (event) => {
        this.setState({ text: event.target.value });
        this.props.changeSearch(event.target.value);
    }

    handleClearSearch = () => {
        this.setState({ text: '' });
        this.props.changeSearch('');
        this.props.showModal('ERROR_MESSAGE');
    }

    handleGoBack = () => {
        this.setState({ text: '' });
        this.props.changeSearch('');
        this.props.history.goBack();
    }

    render() {
        return (<header className="search-header">
            <div className="search-header__container">
                <div className="search-header__block" onClick={this.handleGoBack}>
                    <Icon iconName={'arrow-back'} />
                </div>
                <div className="search-header__input-block">
                    <input type="text" className="search-header__input" placeholder="Поиск" value={this.state.text} onChange={this.handleChangeSearch} autoFocus />
                </div>
                <div className="search-header__block" onClick={this.handleClearSearch}>
                    <Icon iconName={'close'} />
                </div>
            </div>
        </header>);
    }
}

SearchHeader.propTypes = {
    search: PropTypes.object.isRequired,
    changeSearch: PropTypes.func.isRequired,
    searchResultLoader: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired,
    token: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
    return {
        search: state.search,
        token: state.app.token,
    };
}

export default connect(mapStateToProps, { ...actions, ...modalActions })(withRouter(SearchHeader));
