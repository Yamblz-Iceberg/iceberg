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
                <div className="onboarding__slider onboarding-slider">
                    <div className="onboarding-slider__slide">
                        <img
                            className="onboarding-slider__image"
                            src="http://via.placeholder.com/180x180"
                            alt="template"
                        />
                        <h2 className="onboarding-slider__title">Разберитесь в чем угодно</h2>
                        <p className="onboarding-slider__text">Создавайте темы и люди накидывают полезных ссылок по ним</p>
                    </div>
                </div>
            </main>
        );
    }
}

export default Onboarding;
