import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './onboarding.scss';

class Onboarding extends Component {
    handle = e => e;

    render() {
        const slides = [
            {
                _id: 1,
                img: 'http://via.placeholder.com/180x180',
                title: 'Разберитесь в чем угодно',
                text: 'Создавайте темы и люди накидывают полезных ссылок по ним',
            },
            {
                _id: 2,
                img: 'http://via.placeholder.com/180x180',
                title: 'Сохраняйте интересные подборки и ссылки',
                text: '',
            },
        ];

        return (
            <main className="onboarding">
                <NavLink
                    to={'/feed'}
                    className="onboarding__link onboarding__skip"
                >Пропустить</NavLink>
                <div className="onboarding__slider onboarding-slider">
                    <div className="onboarding-slider__track">
                        { slides.map(slide => (
                            <div className="onboarding-slider__slide" key={slide._id}>
                                <img
                                    className="onboarding-slider__image"
                                    src={slide.img}
                                    alt="template"
                                />
                                <h2 className="onboarding-slider__title">{slide.title}</h2>
                                <p className="onboarding-slider__text">{slide.text}</p>
                            </div>
                        )) }
                    </div>
                    <div className="onboarding-slider__pagination-wrapper">
                        { slides.length > 1 && slides.map(slide =>
                            <span className="onboarding-slider__pagination-item" key={slide._id} id={slide._id} />) }
                    </div>
                    <button className="onboarding__link onboarding-slider__prev">Назад</button>
                    <button className="onboarding__link onboarding-slider__next">Далее</button>
                </div>
            </main>
        );
    }
}

export default Onboarding;
