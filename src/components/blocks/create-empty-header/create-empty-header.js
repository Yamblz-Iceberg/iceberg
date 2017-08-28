import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../elements';

import './create-empty-header.scss';

const CreateEmptyHeader = ({ callback }) => (
    <header className="create-empty-header">
        <NavLink to={'/feed'}>
            <Icon iconName={'arrow-back'} iconHeight="16" iconWidth="16" />
        </NavLink>
        <h4 className="create-empty-header__title">Новая тема</h4>
        <button
            className="create-empty-header__submit"
            onClick={callback}
        >Создать</button>
    </header>
);

CreateEmptyHeader.propTypes = {
    callback: PropTypes.func.isRequired,
};

export default CreateEmptyHeader;
