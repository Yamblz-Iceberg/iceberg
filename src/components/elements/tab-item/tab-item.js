import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const TabItem = ({ title, linkTo }) => (
    <li className="tab-item">
        <NavLink to={linkTo} activeClassName="active" >{title}</NavLink>
    </li>
);

TabItem.propTypes = {
    linkTo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default TabItem;
