import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { actions as searchActions } from '../../reducers/search.reducer';
import { putTags } from '../../services/personal-tags.service';

import './hash-tag.scss';

class HashTag extends Component {
    goToSearch = (e) => {
        e.stopPropagation();

        putTags([this.props.id], this.props.token);

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
    id: '',
};

HashTag.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    history: PropTypes.any.isRequired,
    changeSearch: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    id: PropTypes.string,
};

function mapStateToProps(state) {
    return {
        search: state.search,
        token: state.authorization.access_token,
    };
}

export default connect(mapStateToProps, { ...searchActions })(withRouter(HashTag));
