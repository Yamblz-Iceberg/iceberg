import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import './create-card.scss';
import { cardBlue } from './../../variables.scss';

import { CreateHashTag, Icon, CardFooter } from './../../blocks';

import { showErrorModal } from './../../reducers/modal.reducer';
import { createHashtag, deleteHashTag, editHashTag, addImage } from '../../reducers/create-collection.reducer';

/*
Компонент карточки создания новой коллекции. Содержит логику
добавления тегов, инпут названия подборки, загрузчик для обложки
подборки. Работает с полем "createCollection" стора.
*/
class CreateCard extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        title: PropTypes.string,
        tags: PropTypes.array,
        createHashtag: PropTypes.func.isRequired,
        deleteHashTag: PropTypes.func.isRequired,
        editHashTag: PropTypes.func.isRequired,
        showErrorModal: PropTypes.func.isRequired,
        addImage: PropTypes.func.isRequired,
        color: PropTypes.string,
        photo: PropTypes.string,
        token: PropTypes.string.isRequired,
    };

    static defaultProps = {
        title: '',
        tags: [],
        color: cardBlue,
        photo: '',
    };

    constructor() {
        super();
        this.state = {
            currentHashTagText: '',
            canCreateTag: false,
            imageStatus: 'none',
        };
    }

    setTagText = (text) => {
        this.setState({
            currentHashTagText: text,
        });
    }

    setCanCreate = (status) => {
        this.setState({
            canCreateTag: status,
        });
    }

    handleHashTagChange = (event) => {
        const textWithoutSpaces = event.target.value.trim();
        if (textWithoutSpaces === event.target.value) {
            this.setTagText(textWithoutSpaces);
        }
    }

    handleTitleChange = (event) => {
        this.props.data.callback(event.target.value);
    }

    handleAddTag = () => {
        const {
            currentHashTagText,
        } = this.state;

        this.props.createHashtag(currentHashTagText, this.props.token);
        this.setTagText('');
        this.setCanCreate(false);
    }

    handleAddButtonClick = () => {
        this.setCanCreate(true);
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

    handleUploadPicture = () => {
        /* eslint-disable */
        const uploadPhoto = (imageURI) => {
            const options = new FileUploadOptions();
            const ft = new FileTransfer();

            options.fileKey = 'photo';
            options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
            options.mimeType = 'image/jpeg';

            const params = {};
            options.params = params;
            options.chunkedMode = false;

            this.setState({
                imageStatus: 'uploading',
            });

            ft.upload(imageURI, 'https://iceberg-project.herokuapp.com/upload', (result) => {
                if (result.response) {
                    try {
                        const data = JSON.parse(result.response);
                        this.setState({
                            imageStatus: 'uploaded',
                        });
                        this.props.addImage({ color: data.mainColor, photo: data.fileName });
                    } catch (e) {
                        this.props.showErrorModal();
                    }
                }
            }, (error) => {
                this.setState({
                    imageStatus: 'none',
                });
                this.props.showErrorModal();
            }, options);
        };
        /* eslint-enable */

        navigator.camera.getPicture(
            (img) => { uploadPhoto(img); },
            () => {},
            {
                quality: 20,
                destinationType: navigator.camera.DestinationType.FILE_URI,
                encodingType: navigator.camera.EncodingType.JPEG,
                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
            },
        );
    }

    render() {
        const {
            userName,
            avatar,
        } = this.props.data;

        const {
            currentHashTagText,
            canCreateTag,
        } = this.state;

        const tags = this.props.tags;

        const avatarOptions = {
            size: '25',
            photo: avatar,
            iconColor: '#fff',
        };

        const initText = '+ Добавить категорию';
        let uploaderImg;
        switch (this.state.imageStatus) {
        case 'uploading':
            uploaderImg = (<div className="create-card__preloader" />);
            break;
        default:
            uploaderImg = (<Icon iconName="picture" iconColor="#fff" iconWidth="24" iconHeight="24" />);
            break;
        }

        const cardStyles = {
            backgroundColor: this.props.color,
            backgroundImage: `url(${this.props.photo})`,
        };

        return (
            <div className="create-card" style={cardStyles}>
                <div className="create-card__hashtags-wrapper">
                    { tags.length > 0 && tags.map(hashTag => (
                        <CreateHashTag
                            initText={initText}
                            text={hashTag.name}
                            key={hashTag.id}
                            tagChangeCallback={event => this.handleEditTag(hashTag.id, event)}
                            tagAddCallback={this.handleAddTag}
                            tagDeleteCallback={() => this.handleDeleteTag(hashTag.id)}
                        />))
                    }
                    { ((canCreateTag && tags.length < 4) || tags.length === 0) && (
                        <CreateHashTag
                            initText={initText}
                            text={currentHashTagText}
                            tagChangeCallback={this.handleHashTagChange}
                            tagAddCallback={this.handleAddTag}
                        />)
                    }
                    { (!canCreateTag && tags.length > 0 && tags.length < 4) && (
                        <button
                            className="create-card__add-button"
                            onClick={this.handleAddButtonClick}
                        >
                            <Icon iconName="plus" iconColor="#fff" />
                        </button>
                    ) }
                </div>
                <div className="create-card__input-wrap">
                    <textarea
                        className="create-card__input"
                        onChange={this.handleTitleChange}
                        value={this.props.title}
                        rows="4"
                        maxLength="50"
                        placeholder="Введите название темы"
                    />
                </div>
                {
                    typeof window.cordova !== 'undefined' ? (
                        <div className="create-card__upload-photo-container" onClick={this.state.imageStatus === 'uploading' ? () => {} : this.handleUploadPicture}>
                            <div className="create-card__upload-photo-wrap">{ uploaderImg }</div>
                        </div>
                    ) :
                        (
                            <div className="create-card__upload-photo-container">
                                <Icon iconName="picture" iconColor="#fff" iconWidth="24" iconHeight="24" />
                                <p className="create-card__upload-photo-title">Недоступно в браузере</p>
                            </div>
                        )
                }

                <div className="create-card__footer">
                    <CardFooter
                        isCreatingCard
                        avatarOptions={avatarOptions}
                        userName={userName}
                        linksCount={0}
                        savedTimesCount={0}
                    />
                </div>
                { this.props.photo ? <div className="create-card__overlay" /> : null }
            </div>
        );
    }
}

export default connect(
    state => ({
        token: state.authorization.access_token,
        title: state.createCollection.title,
        tags: state.createCollection.tags,
        color: state.createCollection.color,
        photo: state.createCollection.photo,
    }),
    { createHashtag, deleteHashTag, editHashTag, addImage, showErrorModal },
)(CreateCard);
