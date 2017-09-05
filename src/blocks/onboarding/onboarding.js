import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import OnboardingImageSlide from './onboarding-image-slide';

import './onboarding.scss';

class Onboarding extends Component {
    constructor() {
        super();
        this.state = {
            currentSlide: 0,
            slides: [],
            tags: [],
        };
    }

    componentWillMount = () => {
        this.setSlides([
            {
                _id: 0,
                img: 'http://via.placeholder.com/180x180',
                title: 'Разберитесь в чем угодно',
                text: 'Создавайте темы и люди накидывают полезных ссылок по ним',
            },
            {
                _id: 1,
                img: 'http://via.placeholder.com/180x180',
                title: 'Сохраняйте интересные подборки и ссылки',
                text: '',
            },
        ]);
    }

    setSlides = (slides) => {
        this.setState({
            slides,
        });
    }

    setCurrentSlide = (slide) => {
        this.setState({
            currentSlide: slide,
        });
    }

    nextSlide = () => {
        this.setCurrentSlide(this.state.currentSlide + 1);
    }

    prevSlide = () => {
        this.setCurrentSlide(this.state.currentSlide - 1);
    }

    render() {
        const { slides, currentSlide, tags } = this.state;

        return (
            <main className="onboarding">
                <NavLink
                    to={'/feed'}
                    className="onboarding__link onboarding__skip"
                >Пропустить</NavLink>

                <div className="onboarding__slider onboarding-slider">
                    <div className="onboarding-slider__track" style={{ transform: `translateX(-${100 * currentSlide}%)` }}>
                        { slides.map(slide => (
                            <OnboardingImageSlide {...slide} key={slide._id} />
                        )) }
                    </div>
                    <div className="onboarding-slider__pagination-wrapper">
                        { slides.length > 1 && slides.map(slide => (
                            <span
                                className={`
                                onboarding-slider__pagination-item
                                ${currentSlide === slide._id ? 'onboarding-slider__pagination-item--active' : ''}
                                `}
                                key={slide._id}
                                id={slide._id}
                            />))
                        }
                    </div>
                    <button
                        onClick={this.prevSlide}
                        className={`
                        onboarding__link onboarding-slider__prev
                        ${currentSlide === 0 ? 'onboarding__link--inactive' : ''}
                        `}
                    >Назад</button>
                    { currentSlide === (slides.length - 1) && tags.length > 1
                        ? (
                            <button className="onboarding__link onboarding-slider__next">Готово</button>
                        )
                        : (
                            <button
                                onClick={this.nextSlide}
                                className={`
                                onboarding__link onboarding-slider__next
                                ${currentSlide === (slides.length - 1) ? 'onboarding__link--inactive' : ''}
                                `}
                            >Далее</button>
                        )
                    }
                </div>
            </main>
        );
    }
}

export default Onboarding;
