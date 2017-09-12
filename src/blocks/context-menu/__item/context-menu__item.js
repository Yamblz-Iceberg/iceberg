
import React from 'react';
import PropTypes from 'prop-types';
import './context-menu__item.scss';

const ContextMenuItem = ({ item }) =>
    (<div className="dropdown-menu-item" onClick={() => { item.onClick(); }} >
        {
            item.icon !== null
                ? <div className="dropdown-menu-item__ico">
                    { item.icon }
                </div>
                : null
        }
        <p className="dropdown-menu-item__title">
            { item.title }
        </p>
    </div>);

ContextMenuItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onClick: PropTypes.func,
        icon: PropTypes.object,
    }).isRequired,
};

export default ContextMenuItem;
