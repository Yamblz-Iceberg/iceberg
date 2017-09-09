import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContextMenuItem from './__item/context-menu__item';
import { Icon } from './../../blocks';

import './context-menu.scss';

class ContextMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
        };
    }

    handleOutsideClick = (event) => {
        if (this.refContextMenu && !this.refContextMenu.contains(event.target)) {
            this.toggle();
        }
    };

    handleTouchMove = () => {
        this.setState({ isOpened: false });
    };

    toggle = () => {
        if (this.state.isOpened === true) {
            this.setState({ isOpened: false });
            document.removeEventListener('click', this.handleOutsideClick, false);
            document.body.removeEventListener('touchmove', this.handleTouchMove, false);
        } else {
            this.setState({ isOpened: true });
            document.addEventListener('click', this.handleOutsideClick, false);
            document.body.addEventListener('touchmove', this.handleTouchMove, false);
        }
    };

    render() {
        const { items, iconName, iconColor } = this.props;
        return (<div
            className="context-menu"
            onClick={this.toggle}
            ref={(el) => { this.refContextMenu = el; }}
        >
            <Icon iconName={iconName} iconColor={iconColor} />
            { this.state.isOpened && <div className="context-menu__overlay" /> }
            { this.state.isOpened && <div className="context-menu__list">
                {
                    items.map(item => <ContextMenuItem key={item.id} item={item} />)
                }
            </div>
            }
        </div>);
    }
}

ContextMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        icon: PropTypes.any,
        onClick: PropTypes.func,
    })),
    iconName: PropTypes.string,
    iconColor: PropTypes.string,
};

ContextMenu.defaultProps = {
    icon: null,
    items: [],
    iconName: 'more-vert',
    iconColor: '#fff',
};

export default ContextMenu;
