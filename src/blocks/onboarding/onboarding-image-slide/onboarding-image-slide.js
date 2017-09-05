import React from 'react';
import PropTypes from 'prop-types';

import './onboarding-image-slide.scss';

const OnboardingImageSlide = ({ img, title, text }) => (
    <div className="onboarding-image-slide__slide">
        <img
            className="onboarding-image-slide__image"
            src={img}
            alt="template"
        />
        <h2 className="onboarding-image-slide__title">{title}</h2>
        <p className="onboarding-image-slide__text">{text}</p>
    </div>
);

OnboardingImageSlide.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default OnboardingImageSlide;
