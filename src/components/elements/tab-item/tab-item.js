import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './tab-item.scss';

const TabItem = ({ title, linkTo }) => (
    <li className="tab__item">
        <NavLink exact to={linkTo} className="tab__link" activeClassName="tab__link-active" >
            {title}
        </NavLink>
    </li>
);

TabItem.propTypes = {
    linkTo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default TabItem;
