import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../../elements/index';

import './create-description-header.scss';

class CreateDescriptionHeader extends Component {
    constructor() {
        super();
        this.state = {
            menuOpened: false,
        };
    }

    toggleMenu = () => {
        this.setState({
            menuOpened: !this.state.menuOpened,
        });
    }

    clearTextArea = () => {
        this.toggleMenu();
        this.props.callback();
    }

    render() {
        return (
            <header className="create-description-header">
                <NavLink to={'/create-empty'}>
                    <Icon iconName={'arrow-back'} />
                </NavLink>
                <h4 className="create-description-header__title">Описание</h4>
                <span onClick={this.toggleMenu}>
                    <Icon iconName={'more-vert'} />
                </span>
                {this.state.menuOpened &&
                    (<ul className="create-description-header__dropdown dropdown">
                        <li
                            role="menuitem"
                            tabIndex="0"
                            className="dropdown__item"
                            onClick={this.clearTextArea}
                        >Очистить</li>
                    </ul>)}
            </header>
        );
    }
}

CreateDescriptionHeader.propTypes = {
    callback: PropTypes.func.isRequired,
};

export default CreateDescriptionHeader;
