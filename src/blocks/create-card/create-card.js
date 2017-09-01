import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { cardBlue } from '../../variables.scss';
import './create-card.scss';

import { CreateHashTag } from './../../blocks';
import { TemplateCard } from './..';
import { addHashTag } from '../../reducers/create-collection.reducer';

class CreateCard extends Component {
    constructor() {
        super();
        this.state = {
            hashTag: {
                initText: '+ Добавить категорию',
                text: '',
                hashTags: [],
            },
        };
    }

    componentWillMount = () => {
        this.setHashTags(this.props.hashTags);
    }

    componentWillReceiveProps = (nextProps) => {
        const thisHashTags = JSON.stringify(this.props.hashTags);
        const nextHashTags = JSON.stringify(nextProps.hashTags);

        if (thisHashTags !== nextHashTags) {
            this.setHashTags(nextProps.hashTags);
        }
    }

    setTagText = (text) => {
        this.setState({
            hashTag: {
                ...this.state.hashTag,
                text,
            },
        });
    }

    setHashTags = (hashTags) => {
        this.setState({
            hashTag: {
                ...this.state.hashTag,
                hashTags,
            },
        });
    }

    handleHashTagChange = (event) => {
        this.setTagText(event.target.value);
    }

    handleAddTag = () => {
        const {
            text,
        } = this.state.hashTag;

        this.props.addHashTag(text);
        this.setTagText('');
    }

    maxNumberOfCharacters = (event) => {
        // "event.keyCode !== 8" для backspace
        if (event.target.textContent.length > 50 && event.keyCode !== 8) {
            event.preventDefault();
        }

        this.props.data.callback(event.target.textContent);
    }

    render() {
        const { userName, avatar } = this.props.data;

        const {
            text,
            initText,
            hashTags,
        } = this.state.hashTag;

        const component = (
            <div className="create-card">
                { hashTags.length > 0 && hashTags.map(hashTag => (
                    <CreateHashTag
                        text={hashTag.text}
                        initText={initText}
                        key={hashTag.id}
                        tagChangeCallback={this.handleHashTagChange}
                        tagAddCallback={this.handleAddTag}
                    />))
                }
                <CreateHashTag
                    text={text}
                    initText={initText}
                    tagChangeCallback={this.handleHashTagChange}
                    tagAddCallback={this.handleAddTag}
                />
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
    hashTags: PropTypes.array.isRequired,
    addHashTag: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        title: state.createCollection.title,
        hashTags: state.createCollection.hashTags,
    }),
    { addHashTag },
)(CreateCard);
