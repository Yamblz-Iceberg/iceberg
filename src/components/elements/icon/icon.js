import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/svg/icons-sprite.svg';

const URL = './assets/svg/icons-sprite.svg';

const Icon = props => (
    <svg
        className={props.className}
        width={props.iconWidth}
        height={props.iconHeight}
        color={props.iconColor}
    >
        <use xlinkHref={`${URL}#${props.iconName}`} />
    </svg>
);

Icon.propTypes = {
    iconName: PropTypes.string.isRequired,
    iconWidth: PropTypes.string.isRequired,
    iconHeight: PropTypes.string.isRequired,
    className: PropTypes.string,
    iconColor: PropTypes.string,
};

Icon.defaultProps = {
    className: '',
    iconColor: '#000',
};

export default Icon;
