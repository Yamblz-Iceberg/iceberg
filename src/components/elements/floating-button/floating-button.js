import React from 'react';

import { Icon } from './../../elements';

import './floating-button.scss';
// import vars from '../../../variables.scss';

const FloatingButton = () => (
    // const buttonStyles = {
    //     background: vars.mainYellow,
    // };
    <button className="floating-button">
        <Icon iconName={'plus'} />
    </button>
);

export default FloatingButton;
