import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon } from '../../elements';

import './collection-detail-header.scss';

class CollectionDetailHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixedHeader: false,
        };
    }

    render() {
        return (
            <header
                className={`collection-detail-header
                ${this.state.fixedHeader === true ? 'collection-detail-header--fixed' : ''}`}
            >
                <div className="collection-detail-header__container">
                    <div className="collection-detail-header__block">
                        <Link to="/feed">
                            <Icon iconName={'arrow-back'} iconColor={this.state.fixedHeader ? '#000' : '#fff'} />
                        </Link>
                        <h4 className="collection-detail-header__title">
                            {this.state.fixedHeader === true ? this.props.collectionTitle : false}
                        </h4>
                    </div>
                    <div className="collection-detail-header__block">
                        <Icon iconName={'more-vert'} iconColor={this.state.fixedHeader ? '#000' : '#fff'} />
                    </div>
                </div>
            </header>
        );
    }
}

CollectionDetailHeader.propTypes = {
    collectionTitle: PropTypes.string.isRequired,
};

export default CollectionDetailHeader;
