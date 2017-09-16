import React from 'react';
import PropTypes from 'prop-types';
import './dropdown-menu-item.scss';

const DropdownMenuItem = ({ item, onClick }) =>
    (<div className="dropdown-menu-item" onClick={() => onClick(item)} >
        { item.title }
    </div>);

DropdownMenuItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }),
    onClick: PropTypes.any.isRequired,
};

DropdownMenuItem.defaultProps = {
    item: {},
};

export default DropdownMenuItem;
