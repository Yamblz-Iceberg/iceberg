import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import './create-card.scss';
import { cardBlue } from './../../variables.scss';

import { CreateHashTag, Icon, CardFooter } from './../../blocks';

import { actions as modalActions } from './../../reducers/modal.reducer';
import { addHashTag, deleteHashTag, editHashTag, addImage } from '../../reducers/create-collection.reducer';

class CreateCard extends Component {
    constructor() {
        super();
        this.state = {
            currentHashTagText: '',
            hashTags: [],
            canCreateTag: false,
            cardStyles: {},
            imageStatus: 'none',
        };
    }

    componentWillMount = () => {
        this.setHashTags(this.props.hashTags);
        this.setCardStyles(this.props.color, this.props.photo);
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props.hashTags !== nextProps.hashTags) {
            this.setHashTags(nextProps.hashTags);
        }
        if (this.props.color !== nextProps.color || this.props.photo !== nextProps.photo) {
            this.setCardStyles(nextProps.color, nextProps.photo);
        }
    }

    setCardStyles = (color, photo) => {
        this.setState({
            cardStyles: {
                backgroundColor: color,
                backgroundImage: `url(${photo})`,
            },
        });
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

    setCanCreate = (status) => {
        this.setState({
            canCreateTag: status,
        });
    }

    handleHashTagChange = (event) => {
        this.setTagText(event.target.value);
    }

    handleTitleChange = (event) => {
        this.props.data.callback(event.target.value);
    }

    handleAddTag = () => {
        const {
            currentHashTagText,
        } = this.state;

        this.props.addHashTag(currentHashTagText);
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
                        // this.setCardStyles(data.mainColor, data.fileName)
                        this.setState({
                            imageStatus: 'uploaded',
                        });
                        this.props.addImage({ color: data.mainColor, photo: data.fileName });
                    } catch (e) {
                        this.props.showModal('ERROR_MESSAGE');
                    }
                }
            }, (error) => {
                this.setState({
                    imageStatus: 'none',
                });
                console.log(error);
                this.props.showModal('ERROR_MESSAGE');
            }, options);
        };

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
            hashTags,
            canCreateTag,
        } = this.state;

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

        return (
            <div className="create-card" style={this.state.cardStyles}>
                <div>
                    <div className="create-card__hashtags-wrapper">
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
                        { ((canCreateTag && hashTags.length < 4) || hashTags.length === 0) && (
                            <CreateHashTag
                                initText={initText}
                                text={currentHashTagText}
                                tagChangeCallback={this.handleHashTagChange}
                                tagAddCallback={this.handleAddTag}
                            />)
                        }
                        { (!canCreateTag && hashTags.length > 0 && hashTags.length < 4) && (
                            <button
                                className="create-card__add-button"
                                onClick={this.handleAddButtonClick}
                            >
                                <Icon iconName="plus" iconColor="#fff" />
                            </button>
                        ) }
                    </div>
                    <textarea
                        className="create-card__input"
                        onChange={this.handleTitleChange}
                        value={this.props.title}
                        rows="4"
                        maxLength="50"
                        placeholder="Введите название темы"
                    />
                    {
                        window.cordova ? (
                            <div className="create-card__upload-photo-container" onClick={this.state.uploading ? () => {} : this.handleUploadPicture}>
                                <div className="create-card__upload-photo-wrap">{ uploaderImg }</div>
                            </div>
                        ) :
                            (
                                <div className="create-card__upload-photo-container">
                                    <Icon iconName="picture" iconColor="#fff" iconWidth="24" iconHeight="24" />
                                    <p className="create-card__upload-photo-title">Не доступно в браузере</p>
                                </div>
                            )
                    }
                </div>

                <div className="create-card__footer">
                    <CardFooter
                        avatarOptions={avatarOptions}
                        userName={userName}
                        linksCount={0}
                        savedTimesCount={0}
                    />
                </div>
            </div>
        );
    }
}

CreateCard.defaultProps = {
    title: '',
    hashTags: [],
    color: cardBlue,
    photo: '',
};

CreateCard.propTypes = {
    data: PropTypes.object.isRequired,
    title: PropTypes.string,
    hashTags: PropTypes.array,
    addHashTag: PropTypes.func.isRequired,
    deleteHashTag: PropTypes.func.isRequired,
    editHashTag: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    addImage: PropTypes.func.isRequired,
    color: PropTypes.string,
    photo: PropTypes.string,
};

export default connect(
    state => ({
        title: state.createCollection.title,
        hashTags: state.createCollection.hashTags,
        color: state.createCollection.color,
        photo: state.createCollection.photo,
    }),
    { addHashTag, deleteHashTag, editHashTag, addImage, ...modalActions },
)(CreateCard);
