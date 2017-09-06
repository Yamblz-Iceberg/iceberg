import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './onboarding.scss';

class Onboarding extends Component {
    constructor() {
        super();
        this.state = {
            currentSlide: 0,
            tags: [],
        };
    }

    setCurrentSlide = (slide) => {
        this.setState({
            currentSlide: slide,
        });
    }

    setTag = (id, selected) => {
        if (selected) {
            this.setState({
                tags: [
                    ...this.state.tags,
                    id,
                ],
            });
        } else {
            const filteredTags = this.state.tags.filter(tag => tag !== id);

            this.setState({
                tags: filteredTags,
            });
        }
    }

    handleClickTag = id => (event) => {
        const target = event.target;
        const className = 'onboarding-slider__hash-tag--selected';

        if (target.classList.value.includes(className)) {
            target.classList.remove(className);
            this.setTag(id, false);
        } else {
            target.classList.add(className);
            this.setTag(id, true);
        }
    }

    nextSlide = () => {
        this.setCurrentSlide(this.state.currentSlide + 1);
    }

    prevSlide = () => {
        this.setCurrentSlide(this.state.currentSlide - 1);
    }

    render() {
        const { currentSlide, tags } = this.state;
        console.log(tags);
        const slides = [
            {
                _id: 0,
                img: 'http://via.placeholder.com/180x180',
                title: 'Разберитесь в чем угодно',
                text: 'Создавайте темы и люди накидывают полезных ссылок по ним',
                type: '',
            },
            {
                _id: 1,
                img: 'http://via.placeholder.com/180x180',
                title: 'Сохраняйте интересные подборки и ссылки',
                text: '',
                type: '',
            },
            {
                _id: 2,
                title: 'Выберите интересные вам темы',
                text: '',
                type: 'tags',
            },
        ];

        const hashTags = [
            {
                _id: 0,
                text: 'наука',
            },
            {
                _id: 1,
                text: 'автомобили',
            },
            {
                _id: 2,
                text: 'ЗОЖ',
            },
            {
                _id: 3,
                text: 'спорт',
            },
            {
                _id: 4,
                text: 'готовка',
            },
            {
                _id: 5,
                text: 'фотография',
            },
            {
                _id: 6,
                text: 'литература',
            },
            {
                _id: 7,
                text: 'фитнес',
            },
            {
                _id: 8,
                text: 'DIY',
            },
        ];

        return (
            <main className="onboarding">
                <NavLink
                    to={'/feed'}
                    className="onboarding__link onboarding__skip"
                >Пропустить</NavLink>

                <div className="onboarding__slider onboarding-slider">
                    <div className="onboarding-slider__track" style={{ transform: `translateX(-${100 * currentSlide}%)` }}>
                        { slides.map(slide => (
                            <div className="onboarding-slider__slide" key={slide._id}>
                                { slide.type === 'tags'
                                    ? (
                                        <div className="onboarding-slider__hash-tags-wrapper">
                                            { hashTags.map(hashTag => (
                                                <span
                                                    onClick={this.handleClickTag(hashTag._id)}
                                                    className="onboarding-slider__hash-tag"
                                                    key={hashTag._id}
                                                >{`#${hashTag.text}`}</span>))
                                            }
                                        </div>
                                    )
                                    : (
                                        <img
                                            className="onboarding-slider__image"
                                            src={slide.img}
                                            alt="template"
                                        />
                                    )
                                }
                                <h2 className="onboarding-slider__title">{slide.title}</h2>
                                <p className="onboarding-slider__text">{slide.text}</p>
                            </div>
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
                    { currentSlide === (slides.length - 1) && tags.length > 0
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
