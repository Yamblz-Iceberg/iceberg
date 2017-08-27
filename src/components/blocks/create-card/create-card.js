import React from 'react';
import { PropTypes } from 'prop-types';

import './create-card.scss';

import { Icon } from './../../elements';
import { TemplateCard } from './..';

const CreateCard = ({ data }) => {
    const maxNumberOfCharacters = (event) => {
        if (event.target.textContent.length > 50 && event.keyCode !== 8) {
            event.preventDefault();
        }
    };

    const component = (
        <div className="create-card">
            <button className="create-card__button">
                <Icon
                    iconName={'plus'}
                    iconColor={'#fff'}
                />
                <span className="create-card__text">добавить категории</span>
            </button>
            <div
                className="create-card__input"
                role="textbox"
                tabIndex="0"
                onKeyDown={maxNumberOfCharacters}
                contentEditable
            />
        </div>
    );

    const tempCard = {
        component,
        background: 'blue',
        userName: data.userName,
        avatar: data.avatar,
        linksCount: data.linksCount || 0,
        savedLinksCount: data.savedLinksCount || 0,
    };

    return (
        <TemplateCard data={tempCard} />
    );
};

CreateCard.propTypes = {
    data: PropTypes.object.isRequired,
};

export default CreateCard;
