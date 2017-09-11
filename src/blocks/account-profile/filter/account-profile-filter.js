import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Icon, Dropdown } from '../../../blocks';

import {
    getCreatedCollections,
    getSavedLinks,
    getAddedLinks,
    getSavedCollections,
} from './../../../reducers/bookmarks.reducer';

import './account-profile-filter.scss';

class ProfileFilter extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        token: PropTypes.string.isRequired,
        getCreatedCollections: PropTypes.func.isRequired,
        getSavedLinks: PropTypes.func.isRequired,
        getAddedLinks: PropTypes.func.isRequired,
        getSavedCollections: PropTypes.func.isRequired,
    }

    filteringData = (item) => {
        switch (item.name) {
        case 'savedCollections':
            this.props.getSavedCollections(this.props.token, item.name);
            break;
        case 'createdCollections':
            this.props.getCreatedCollections(this.props.token, item.name);
            break;
        case 'newLinks':
            this.props.getSavedLinks(this.props.token, item.name, 'new');
            break;
        case 'addedLinks':
            this.props.getAddedLinks(this.props.token, item.name);
            break;
        case 'openedLinks':
            this.props.getSavedLinks(this.props.token, item.name, 'opened');
            break;
        default:
            break;
        }
    }

    render() {
        const { items } = this.props;
        return (<div className="profile-filter">
            <div className="profile-filter__block">
                <Icon iconName="filter" iconColor="#000" iconHeight="20" iconWidth="20" />
            </div>
            <div className="profile-filter__block profile-filter__block--dropdown-wrap">
                <Dropdown items={items} onSelect={(item) => { this.filteringData(item); }} />
            </div>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        token: state.authorization.access_token,
    };
}

export default connect(mapStateToProps, {
    getCreatedCollections,
    getSavedLinks,
    getSavedCollections,
    getAddedLinks,
})(ProfileFilter);
