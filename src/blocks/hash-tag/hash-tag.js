import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { actions as searchActions } from '../../reducers/search.reducer';

import './hash-tag.scss';

class HashTag extends Component {
    goToSearch = (e) => {
        e.stopPropagation();
        this.props.changeSearch(`#${this.props.name}`);
        this.props.history.push({ pathname: '/search' });
    }
    render() {
        const { name, size } = this.props;
        const className = size === 'small' ? 'hash-tag hash-tag--small' : 'hash-tag';

        return (
            <div className={className}>
                <span className="hash-tag__text" onClick={this.goToSearch}>{`#${name}`}</span>
            </div>
        );
    }
}

HashTag.defaultProps = {
    size: '',
};

HashTag.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    history: PropTypes.any.isRequired,
    changeSearch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        search: state.search,
    };
}

export default connect(mapStateToProps, { ...searchActions })(withRouter(HashTag));
