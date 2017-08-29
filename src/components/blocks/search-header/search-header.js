import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Icon } from '../../elements';

import './search-header.scss';

class SearchHeader extends Component {
    constructor(props) {
        super(props);
        const { search } = this.props;
        this.state = search;
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleClearSearch = this.handleClearSearch.bind(this);
    }
    handleChangeSearch = (event) => {
        this.setState({ text: event.target.value });
    }
    handleClearSearch = () => {
        this.setState({ text: '' });
    }
    render() {
        return (<header className="search-header">
            <div className="search-header__container">
                <div className="search-header__block">
                    <NavLink to={'/feed'}>
                        <Icon iconName={'arrow-back'} iconHeight="16" iconWidth="16" />
                    </NavLink>
                </div>
                <div className="search-header__input-block">
                    <input type="text" className="search-header__input" placeholder="Поиск" value={this.state.text} onChange={this.handleChangeSearch} />
                </div>
                <div className="search-header__block" onClick={this.handleClearSearch}>
                    <Icon iconName={'close'} iconHeight="16" iconWidth="16" />
                </div>
            </div>
        </header>);
    }
}

SearchHeader.propTypes = {
    search: PropTypes.object,
};

SearchHeader.defaultProps = {
    search: {},
};

function mapStateToProps(state) {
    return {
        search: state.search,
    };
}

export default connect(mapStateToProps)(SearchHeader);
