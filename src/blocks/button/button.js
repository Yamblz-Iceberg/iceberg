import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

/*
Компонент 'Button' принимает следующие параметры для модификаторов:
 - 'type', 'size', 'isDisabled'
Доступные модификаторы для параметра 'type':
 - 'disable', 'light', 'transparent', 'yellow', 'fb', 'vk', 'yandex', 'white'
Доступные модификаторы для параметра 'size':
 - 'small', 'medium', 'max-width'

Добавить/Посмотреть модификаторы можно в файле 'button.scss'
*/
const Button = ({ type, size, isDisabled, icon, text, onClick }) => (
    <button
        className={`button
        button--${type}
        ${size !== null ? `button--${size}` : ''}
        ${isDisabled === true ? 'button--disable' : ''}`
        }
        onClick={onClick}
        disabled={isDisabled}
    >
        <span className="button__wrapper">
            {icon}
            <span className="button__text">{text}</span>
        </span>
    </button>
);

Button.defaultProps = {
    icon: null,
    onClick: null,
    type: 'yellow',
    size: null,
    isDisabled: false,
};

Button.propTypes = {
    icon: PropTypes.object,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.any,
    type: PropTypes.string,
    size: PropTypes.string,
    isDisabled: PropTypes.bool,
};

export default Button;
