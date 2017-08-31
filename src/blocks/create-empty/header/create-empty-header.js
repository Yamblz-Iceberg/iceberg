import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../../blocks';

import './create-empty-header.scss';

class CreateEmptyHeader extends Component {
    constructor() {
        super();
        this.state = {
            submitStatus: false,
        };
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            // 5 - минимальное количество символов
            submitStatus: nextProps.title.length > 5,
        });
    }

    render() {
        const { submitCallback } = this.props;

        return (
            <header className="create-empty-header">
                <NavLink to={'/feed'}>
                    <Icon iconName={'arrow-back'} />
                </NavLink>
                <h4 className="create-empty-header__title">Новая тема</h4>
                <button
                    className={`create-empty-header__submit ${this.state.submitStatus ? 'create-empty-header__submit--active' : ''}`}
                    onClick={submitCallback}
                >Создать</button>
            </header>
        );
    }
}

CreateEmptyHeader.propTypes = {
    submitCallback: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default CreateEmptyHeader;
