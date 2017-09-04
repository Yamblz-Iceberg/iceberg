import React from 'react';
import PropTypes from 'prop-types';
import DropdownMenuItem from './../item/dropdown-menu-item';
import './dropdown-menu.scss';

const DropdownMenu = ({ items, select }) => (
    <div className="dropdown-menu">
        { items.map(item =>
            (<DropdownMenuItem
                key={item.id}
                item={item}
                onClick={select}
            />),
        )
        }
    </div>
);

DropdownMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })),
    select: PropTypes.func.isRequired,
};

DropdownMenu.defaultProps = {
    items: [],
};

export default DropdownMenu;
