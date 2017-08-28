import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../elements';

import './collection-detail-header.scss';

const fixedHeader = false;

const CollectionDetailHeader = ({ collectionTitle }) => (
    <header className={`collection-detail-header ${fixedHeader === true ? 'collection-detail-header--fixed' : ''}`}>
        <div className="collection-detail-header__container">
            <div className="collection-detail-header__block">
                <Icon iconName={'arrow-back'} iconColor={fixedHeader ? '#000' : '#fff'} />
                <h4 className="collection-detail-header__title">{fixedHeader === true ? collectionTitle : false}</h4>
            </div>
            <div className="collection-detail-header__block">
                <Icon iconName={'more-vert'} iconColor={fixedHeader ? '#000' : '#fff'} />
            </div>
        </div>
    </header>
);

CollectionDetailHeader.propTypes = {
    collectionTitle: PropTypes.string.isRequired,
};

export default CollectionDetailHeader;
