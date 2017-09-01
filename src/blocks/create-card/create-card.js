import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import './create-card.scss';

import { CreateHashTag, Avatar, Icon } from './../../blocks';
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

    maxNumberOfCharacters = (event) => {
        // "event.keyCode !== 8" для backspace
        if (event.target.textContent.length > 50 && event.keyCode !== 8) {
            event.preventDefault();
        }

        this.props.data.callback(event.target.textContent);
    }

    render() {
        const {
            userName,
            avatar,
        } = this.props.data;

        const {
            currentHashTagText,
            hashTags,
        } = this.state;

        const avatarOptions = {
            size: '25',
            photo: avatar,
            iconColor: '#fff',
        };

        const initText = '+ Добавить категорию';

        return (
            <div className="create-card">
                <div>
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
                    <div
                        className="create-card__input"
                        role="textbox"
                        tabIndex="0"
                        onKeyUp={this.maxNumberOfCharacters}
                        contentEditable
                    >{this.props.title}</div>
                </div>

                <div className="create-card-footer">

                    <div className="create-card-footer__user">
                        <Avatar {...avatarOptions} />
                        <span className="create-card-footer__user-name">{userName}</span>
                    </div>

                    <div className="create-card-footer__actions">
                        <div className="create-card-footer__link-action">
                            <Icon iconName={'link'} iconColor={'#fff'} />
                            <span>{0}</span>
                        </div>
                        <div className="create-card-footer__save-action">
                            <Icon iconName={'save-big'} iconColor={'#fff'} />
                            <span>{0}</span>
                        </div>
                    </div>
                </div>
            </div>
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
