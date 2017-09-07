import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Icon } from '../../blocks';

import { addTag, deleteTag } from '../../reducers/onboarding.reducer';
import './onboarding.scss';

class Onboarding extends Component {
    constructor() {
        super();
        this.state = {
            currentSlide: 0,
            tags: [],
        };
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props.tags !== nextProps.tags) {
            this.setTags(nextProps.tags);
        }
    }

    setCurrentSlide = (slide) => {
        this.setState({
            currentSlide: slide,
        });
    }

    setTags = (tags) => {
        this.setState({
            tags,
        });
    }

    handleClickTag = id => (event) => {
        const target = event.target;
        const className = 'onboarding-slider__hash-tag--selected';

        if (target.classList.value.includes(className)) {
            target.classList.remove(className);
            this.props.deleteTag(id);
        } else {
            target.classList.add(className);
            this.props.addTag(id);
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
        const slides = [
            {
                _id: 0,
                img: 'onboarding1',
                title: 'Изучите любую тему',
                text: 'Найдите существующую или создайте свою подборку',
                type: '',
            },
            {
                _id: 1,
                img: 'onboarding2',
                title: 'Делитесь своими ссылками',
                text: 'Помогайте другим разобраться в теме и повышайте свой рейтинг',
                type: '',
            },
            {
                _id: 2,
                img: 'onboarding3',
                title: 'Сохраняйте подборки и ссылки',
                text: 'Так вы быстро найдете их в профиле и лучше настроите свою ленту',
                type: '',
            },
            {
                _id: 3,
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
                                        <Icon
                                            iconName={slide.img}
                                            iconWidth={'180'}
                                            iconHeight={'180'}
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

Onboarding.propTypes = {
    tags: PropTypes.array,
    addTag: PropTypes.func.isRequired,
    deleteTag: PropTypes.func.isRequired,
};

Onboarding.defaultProps = {
    tags: [],
};

export default connect(
    state => ({
        tags: state.onboarding.tags,
    }),
    { addTag, deleteTag },
)(Onboarding);
