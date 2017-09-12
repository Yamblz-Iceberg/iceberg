import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon } from '../../../blocks';

import { hexToRGB } from '../../../utils/shared-functions';

import './create-empty-header.scss';
import { cardBlue } from '../../../variables.scss';

import { createCollection, clearCollection } from '../../../reducers/create-collection.reducer';
import { actions as modalActions } from '../../../reducers/modal.reducer';

/*
Компонент хедера экрана создания новой коллекции. По нажатию на кнопку "Создать"
обращается к серверу и создаёт новую коллекцию. Данные берёт из поля
"createCollection" стора.
*/
class CreateEmptyHeader extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        title: PropTypes.string,
        photo: PropTypes.string,
        color: PropTypes.string,
        closed: PropTypes.bool,
        description: PropTypes.string,
        tags: PropTypes.array,
        token: PropTypes.string.isRequired,
        history: PropTypes.any.isRequired,
        showModal: PropTypes.func.isRequired,
        createCollection: PropTypes.func.isRequired,
        clearCollection: PropTypes.func.isRequired,
    }

    static defaultProps = {
        title: '',
        description: '',
        tags: [],
        photo: '',
        color: cardBlue,
        closed: false,
    };

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
            tags: currHashTags,
        } = this.props;
        const { title, tags } = nextProps;

        if ((title && currTitle !== title) ||
            (tags && currHashTags !== tags)
        ) {
            this.setSubmitStatus(nextProps);
        }
    };

    setSubmitStatus = ({ title, tags }) => {
        this.setState({
            submitStatus: (
                title.length > 4 &&
                tags.length > 0
            ),
        });
    };

    goBack = () => {
        this.props.history.goBack();
        this.props.clearCollection();
    };

    changeRoute = (data) => {
        const {
            user: {
                firstName,
                lastName,
                photo,
            },
            tags,
        } = this.props;
        const collection = {
            ...data.collection,
            tags,
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
                color: hexToRGB(this.props.color || cardBlue),
                tags: this.props.tags.map(tag => tag.id).reverse(),
            };
            if (this.props.photo) { body.photo = this.props.photo; }
            if (this.props.description) { body.description = this.props.description; }
            if (this.props.closed) { body.closed = this.props.closed; }
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

export default connect(
    state => ({
        user: state.user.data,
        title: state.createCollection.title,
        description: state.createCollection.description,
        closed: state.createCollection.closed,
        tags: state.createCollection.tags,
        token: state.authorization.access_token,
        color: state.createCollection.color,
        photo: state.createCollection.photo,
    }),
    { createCollection, ...modalActions, clearCollection },
)(withRouter(CreateEmptyHeader));
