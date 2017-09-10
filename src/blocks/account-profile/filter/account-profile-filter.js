import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Icon, Dropdown } from '../../../blocks';

import {
    createdCollectionsLoader,
    savedLinksLoader,
    addedLinksLoader,
    savedCollectionsLoader,
    openedLinksLoader,
} from './../../../reducers/bookmarks.reducer';

import './account-profile-filter.scss';

class ProfileFilter extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        token: PropTypes.string.isRequired,
        createdCollectionsLoader: PropTypes.func.isRequired,
        savedLinksLoader: PropTypes.func.isRequired,
        addedLinksLoader: PropTypes.func.isRequired,
        savedCollectionsLoader: PropTypes.func.isRequired,
    }

    filteringData = (item) => {
        switch (item.name) {
        case 'savedCollections':
            this.props.savedCollectionsLoader(this.props.token, item.name);
            break;
        case 'createdCollections':
            this.props.createdCollectionsLoader(this.props.token, item.name);
            break;
        case 'newLinks':
            this.props.savedLinksLoader(this.props.token, item.name, 'new');
            break;
        case 'addedLinks':
            this.props.addedLinksLoader(this.props.token, item.name);
            break;
        case 'openedLinks':
            this.props.savedLinksLoader(this.props.token, item.name, 'opened');
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
    createdCollectionsLoader,
    savedLinksLoader,
    savedCollectionsLoader,
    addedLinksLoader,
    openedLinksLoader,
})(ProfileFilter);
