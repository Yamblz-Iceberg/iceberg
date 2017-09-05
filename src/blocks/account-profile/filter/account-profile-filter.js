import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Icon, Dropdown } from '../../../blocks';

import {
    myCollectionsLoader,
    savedLinksLoader,
    savedCollectionsLoader,
} from './../../../reducers/user.reducer';

import './account-profile-filter.scss';

class ProfileFilter extends Component {
    filteringData = (item) => {
        switch (item.name) {
        case 'savedCollections':
            this.props.savedCollectionsLoader(this.props.token, item.name);
            break;
        case 'myCollections':
            this.props.myCollectionsLoader(this.props.token, item.name);
            break;
        case 'savedLinks':
            this.props.savedLinksLoader(this.props.token, item.name);
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
            <div className="profile-filter__block">
                <Icon
                    className="home-filter__icon-settings"
                    iconName="search"
                    iconColor="#000"
                    iconHeight="24"
                    iconWidth="24"
                />
            </div>
        </div>);
    }
}

ProfileFilter.propTypes = {
    items: PropTypes.array.isRequired,
    token: PropTypes.string.isRequired,
    myCollectionsLoader: PropTypes.func.isRequired,
    savedLinksLoader: PropTypes.func.isRequired,
    savedCollectionsLoader: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        token: state.app.token,
    };
}

export default connect(mapStateToProps,
    {
        myCollectionsLoader,
        savedLinksLoader,
        savedCollectionsLoader,
    })(ProfileFilter);
