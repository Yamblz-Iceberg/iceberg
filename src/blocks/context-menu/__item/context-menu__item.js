import React from 'react';
import PropTypes from 'prop-types';

import './context-menu__item.scss';

const ContextMenuItem = ({ item }) =>
    (<div className="context-menu__item" onClick={() => { item.onClick(); }} >
        {
            item.icon !== null
                ? <div className="context-menu__item-ico">
                    { item.icon }
                </div>
                : null
        }
        <p className="context-menu__item-title">
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
