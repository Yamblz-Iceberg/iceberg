import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { cardBlue } from '../../variables.scss';
import './create-card.scss';

import { CreateHashTag } from './../../blocks';
import { TemplateCard } from './..';
import { addHashTag, deleteHashTag, editHashTag } from '../../reducers/create-collection.reducer';

class CreateCard extends Component {
    constructor() {
        super();
        this.state = {
            currentHashTagText: '',
            hashTags: [],
        };
    }

    componentWillMount = () => {
        this.setHashTags(this.props.hashTags);
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props.hashTags !== nextProps.hashTags) {
            this.setHashTags(nextProps.hashTags);
        }
    }

    setTagText = (text) => {
        this.setState({
            currentHashTagText: text,
        });
    }

    setHashTags = (hashTags) => {
        this.setState({
            hashTags,
        });
    }

    handleHashTagChange = (event) => {
        this.setTagText(event.target.value);
    }

    handleAddTag = () => {
        const {
            currentHashTagText,
        } = this.state;

        this.props.addHashTag(currentHashTagText);
        this.setTagText('');
    }

    handleEditTag = (id, event) => {
        const { value } = event.target;

        if (value === '') {
            this.props.deleteHashTag(id);
        } else {
            this.props.editHashTag(id, event.target.value);
        }
    }

    handleDeleteTag = (id) => {
        this.props.deleteHashTag(id);
    }

    handleTitleChange = (event) => {
        console.log(event.target.value);
        this.props.data.callback(event.target.value);
    }

    render() {
        const { userName, avatar } = this.props.data;

        const {
            currentHashTagText,
            hashTags,
        } = this.state;

        const initText = '+ Добавить категорию';

        const component = (
            <div className="create-card">
                { hashTags.length > 0 && hashTags.map(hashTag => (
                    <CreateHashTag
                        initText={initText}
                        text={hashTag.text}
                        key={hashTag.id}
                        tagChangeCallback={event => this.handleEditTag(hashTag.id, event)}
                        tagAddCallback={this.handleAddTag}
                        tagDeleteCallback={() => this.handleDeleteTag(hashTag.id)}
                    />))
                }
                { hashTags.length < 4 && (
                    <CreateHashTag
                        initText={initText}
                        text={currentHashTagText}
                        tagChangeCallback={this.handleHashTagChange}
                        tagAddCallback={this.handleAddTag}
                    />)
                }
                <textarea
                    className="create-card__input"
                    onChange={this.handleTitleChange}
                    value={this.props.title}
                    rows="3"
                    maxLength="50"
                    placeholder="Название темы"
                />
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
    deleteHashTag: PropTypes.func.isRequired,
    editHashTag: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        title: state.createCollection.title,
        hashTags: state.createCollection.hashTags,
    }),
    { addHashTag, deleteHashTag, editHashTag },
)(CreateCard);
