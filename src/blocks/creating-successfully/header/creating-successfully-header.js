import React from 'react';
import { NavLink } from 'react-router-dom';
import './creating-successfully-header.scss';

import { Icon } from '../../../blocks';

const CreatingSuccessfullyHeader = () => (
    <header className="create-successfully-header">
        <h2>Готово</h2>
        <NavLink to={'/feed/time'}>
            <Icon iconName={'close'} />
        </NavLink>
    </header>
);

export default CreatingSuccessfullyHeader;
