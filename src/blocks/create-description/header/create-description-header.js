import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Icon } from '../../../blocks';

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
    };

    clearTextArea = () => {
        this.toggleMenu();
        this.props.callback();
    };

    goBack = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <header className="create-description-header">
                <span onClick={this.goBack}>
                    <Icon iconName={'arrow-back'} />
                </span>
                <h4 className="create-description-header__title">{this.props.title}</h4>
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
    history: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
};

export default withRouter(CreateDescriptionHeader);
