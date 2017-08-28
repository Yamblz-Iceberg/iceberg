import React from 'react';
import PropTypes from 'prop-types';
import './icon.scss';

import Sprite from '../../../assets/svg/icons-sprite.svg';

// const URL = '../svg/icons-sprite.svg';

const iconsSizes = {
    account: {
        width: '20px',
        height: '20px',
    },
    archive: {
        width: '20px',
        height: '18px',
    },
    search: {
        width: '24px',
        height: '24px',
    },
    link: {
        width: '22px',
        height: '14px',
    },
    'save-big': {
        width: '16px',
        height: '20px',
    },
    'save-small': {
        width: '11px',
        height: '14px',
    },
    'like-big': {
        width: '22px',
        height: '21px',
    },
    'like-small': {
        width: '14px',
        height: '15px',
    },
    'more-vert': {
        width: '4px',
        height: '16px',
    },
    'arrow-back': {
        width: '16px',
        height: '16px',
    },
    'arrow-details': {
        width: '8px',
        height: '13px',
    },
    settings: {
        width: '20px',
        height: '20px',
    },
    close: {
        width: '14px',
        height: '14px',
    },
    plus: {
        width: '14px',
        height: '14px',
    },
    themes: {
        width: '20px',
        height: '20px',
    },
    share: {
        width: '18px',
        height: '20px',
    },
    flash: {
        width: '16px',
        height: '20px',
    },
    question: {
        width: '20px',
        height: '20px',
    },
    'arrow-more--popup': {
        width: '12px',
        height: '8px',
    },
};

const Icon = (props) => {
    const iconWidth = props.iconWidth !== '' ? props.iconWidth : iconsSizes[props.iconName].width;
    const iconHeight = props.iconHeight !== '' ? props.iconHeight : iconsSizes[props.iconName].height;
    return (
        <svg
            width={iconWidth}
            height={iconHeight}
            className={`${props.className} ${'svg-icon'}`}
            color={props.iconColor}
        >
            <use xlinkHref={`${Sprite}#${props.iconName}`} />
        </svg>
    );
};

Icon.propTypes = {
    iconName: PropTypes.string.isRequired,
    iconWidth: PropTypes.string,
    iconHeight: PropTypes.string,
    className: PropTypes.string,
    iconColor: PropTypes.string,
};

Icon.defaultProps = {
    iconWidth: '',
    iconHeight: '',
    className: '',
    iconColor: '#000',
};

export default Icon;
