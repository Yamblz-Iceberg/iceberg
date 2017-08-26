import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Icon } from './../';

import './list-group-item.scss';

const ListGroupItem = ({ data }) => (
    <NavLink to={data.linkTo}>
        <div className="list-group-item">
            <div className="list-group-item__info">{data.info}</div>
            <div className="list-group-item__title">{data.title}</div>
            <div className="list-group-item__ico">
                <Icon
                    iconName={'arrow-detail'}
                    iconHeight="20"
                    iconWidth="20"
                />
            </div>
        </div>
    </NavLink>
);

ListGroupItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ListGroupItem;
