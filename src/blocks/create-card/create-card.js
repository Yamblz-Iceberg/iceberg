import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { cardBlue } from '../../variables.scss';
import './create-card.scss';

import { Icon } from './../../blocks';
import { TemplateCard } from './..';

class CreateCard extends Component {
    maxNumberOfCharacters = (event) => {
        // "event.keyCode !== 8" для backspace
        if (event.target.textContent.length > 50 && event.keyCode !== 8) {
            event.preventDefault();
        }

        this.props.data.callback(event.target.textContent);
    }

    render() {
        const { userName, avatar } = this.props.data;
        const component = (
            <div className="create-card">
                <button className="create-card__button">
                    <span className="create-card__text">добавить категории</span>
                    <Icon
                        iconName={'plus'}
                        iconColor={'#fff'}
                    />
                </button>
                <div
                    className="create-card__input"
                    role="textbox"
                    tabIndex="0"
                    onKeyUp={this.maxNumberOfCharacters}
                    contentEditable
                >{this.props.title}</div>
            </div>
        );

        const tempCard = {
            component,
            background: cardBlue,
            userName,
            avatar,
            linksCount: 0,
            savedTimesCount: 0,
        };

        return (
            <TemplateCard data={tempCard} />
        );
    }
}

CreateCard.propTypes = {
    data: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
};

export default connect(
    state => ({ title: state.createCollection.title }),
)(CreateCard);
