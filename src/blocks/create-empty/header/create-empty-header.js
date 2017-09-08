import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon } from '../../../blocks';

import './create-empty-header.scss';

import { cardBlue } from '../../../variables.scss';

import { createCollection } from '../../../reducers/create-collection.reducer';
import { actions as modalActions } from '../../../reducers/modal.reducer';


class CreateEmptyHeader extends Component {
    constructor() {
        super();
        this.state = {
            submitStatus: false,
        };
    }

    componentWillMount = () => {
        this.setSubmitStatus(this.props);
    };

    componentWillReceiveProps = (nextProps) => {
        const {
            title: currTitle,
            hashTags: currHashTags,
        } = this.props;
        const { title, hashTags } = nextProps;

        if ((title && currTitle !== title) ||
            (hashTags && currHashTags !== hashTags)
        ) {
            this.setSubmitStatus(nextProps);
        }
    };

    setSubmitStatus = ({ title, hashTags }) => {
        this.setState({
            submitStatus: (
                title.length > 4 &&
                hashTags.length > 0
            ),
        });
    };

    goBack = () => {
        this.props.history.goBack();
    };

    changeRoute = (data) => {
        const { firstName, lastName, photo } = this.props.user;

        const collection = {
            linksCount: 0,
            savedTimesCount: 0,
            ...data,
            author: {
                photo,
                firstName,
                lastName,
            },
        };

        this.props.history.push({
            pathname: '/creating-successfully',
            state: { collection },
        });
    };

    hexToRGB = (color) => {
        if (!color.match(/^#[0-9a-f]{3,6}$/i)) {
            return color;
        }
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        return `rgb(${r}, ${g}, ${b})`;
    };

    handleSubmitData = () => {
        if (!this.state.submitStatus) {
            this.props.showModal('ERROR_MESSAGE',
                {
                    title: 'Укажите категорию и название темы',
                    text: 'Укажите хотя бы одну категорию и введите название темы (не менее 5 символов), чтобы другим было проще найти вашу подборку',
                    buttonText: 'Ок',
                });
        } else {
            const body = {
                name: this.props.title,
                color: this.hexToRGB(this.props.color || cardBlue),
                tags: this.props.hashTags.map(tag => tag.id),
            };
            if (this.props.photo) { body.photo = this.props.photo; }
            if (this.props.description) { body.description = this.props.description; }
            this.props.createCollection(body, this.props.token, this.changeRoute);
        }
    };


    render() {
        return (
            <header className="create-empty-header">
                <span onClick={this.goBack}>
                    <Icon iconName={'arrow-back'} />
                </span>
                <h4 className="create-empty-header__title">Новая тема</h4>
                <button
                    className={`create-empty-header__submit ${this.state.submitStatus ? 'create-empty-header__submit--active' : ''}`}
                    onClick={this.handleSubmitData}
                >Создать</button>
            </header>
        );
    }
}

CreateEmptyHeader.defaultProps = {
    title: '',
    description: '',
    hashTags: [],
    photo: '',
    color: cardBlue,
};

CreateEmptyHeader.propTypes = {
    user: PropTypes.object.isRequired,
    title: PropTypes.string,
    photo: PropTypes.string,
    color: PropTypes.string,
    description: PropTypes.string,
    hashTags: PropTypes.array,
    token: PropTypes.string.isRequired,
    createCollection: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired,
    showModal: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        user: state.user.data,
        title: state.createCollection.title,
        description: state.createCollection.description,
        hashTags: state.createCollection.hashTags,
        token: state.authorization.access_token,
        color: state.createCollection.color,
        photo: state.createCollection.photo,
    }),
    { createCollection, ...modalActions },
)(withRouter(CreateEmptyHeader));
