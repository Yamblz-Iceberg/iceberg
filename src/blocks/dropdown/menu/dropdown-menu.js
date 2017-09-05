import React from 'react';
import PropTypes from 'prop-types';
import DropdownMenuItem from './../item/dropdown-menu-item';
import './dropdown-menu.scss';

const DropdownMenu = ({ items, select, show }) => (
    <div className={show ? 'dropdown-menu dropdown-menu--opened' : 'dropdown-menu'}>
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
    show: PropTypes.bool.isRequired,
};

DropdownMenu.defaultProps = {
    items: [],
};

export default DropdownMenu;
