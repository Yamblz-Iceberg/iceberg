import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './onboarding.scss';

class Onboarding extends Component {
    handle = e => e;

    render() {
        return (
            <main className="onboarding">
                <NavLink
                    to={'/feed'}
                    className="onboarding__link onboarding__skip"
                >Пропустить</NavLink>
            </main>
        );
    }
}

export default Onboarding;
