import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/svg/icons-sprite.svg';

const URL = './assets/svg/icons-sprite.svg';

const Icon = props => (
    <svg
        className={props.className}
        width={props.iconWidth}
        height={props.iconHeight}
    >
        <use xlinkHref={`${URL}#${props.iconName}`} />
    </svg>
);

Icon.propTypes = {
    iconName: PropTypes.string,
    className: PropTypes.string,
    iconWidth: PropTypes.string,
    iconHeight: PropTypes.string,
};

Icon.defaultProps = {
    iconName: '',
    className: '',
    iconWidth: '16',
    iconHeight: '16',
};

export default Icon;