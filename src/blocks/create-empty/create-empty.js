import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import { Button, Icon } from '../../blocks';
import { CreateCard, Option, ToggleText } from '../index';
import CreateEmptyHeader from './header/create-empty-header';

import {
    updateTitle,
    updateSwitcher,
    createCollection,
} from '../../reducers/create-collection.reducer';

import './create-empty.scss';

class CreateEmpty extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
        };
    }

    setTitle = (title) => {
        this.setState({
            title,
        });
    }

    handleTitleUpdate = (value) => {
        this.props.updateTitle(value);
        this.setTitle(value);
    }

    changeRoute = () => {
        this.props.history.push({ pathname: './feed' });
    }

    handleSubmitData = () => {
        const body = {
            description: this.props.description,
            name: this.props.title,
            photo: 'sample.jpg',
            tags: ['59a7e38c7db98b35471fed6d', '59a7e38c7db98b35471fed67'],
        };

        this.props.createCollection(body, this.props.token, this.changeRoute);
    };

    handleSwitcherUpdate = id => value => this.props.updateSwitcher(id, value);

    render() {
        const {
            description,
            user,
        } = this.props;

        const createCardProps = {
            userName: `${user.firstName} ${user.lastName}`,
            avatar: user.photo,
            callback: this.handleTitleUpdate,
        };

        const optionsProperties = [
            {
                id: 1,
                option: 'Предлагать ссылки',
                noticeText: 'Нотификация1',
            },
            {
                id: 2,
                option: 'Модерировать ссылки',
                noticeText: 'Нотификация2',
            },
        ];

        const editDescriptionIcon = (
            <NavLink to={'/create-description'} className="create-empty__edit-description">
                <Icon iconName={'edit'} />
            </NavLink>
        );

        return (
            <main className="create-empty">
                <CreateEmptyHeader
                    submitCallback={this.handleSubmitData}
                    title={this.state.title}
                />
                <div className="create-empty__card-wrapper">
                    <CreateCard data={createCardProps} />
                </div>
                {description === ''
                    ? (
                        <NavLink
                            to={'/create-description'}
                            className="create-empty__add-description"
                        >
                            <Button
                                icon={<Icon iconName={'plus'} />}
                                text="Добавить описание"
                                background="rgba(255,255,255, 0)"
                            />
                        </NavLink>
                    )
                    : (
                        <div className="create-empty__toggle-text">
                            <ToggleText
                                text={description}
                                component={editDescriptionIcon}
                            />
                        </div>
                    )
                }
                { optionsProperties
                    .map(option => (
                        <Option
                            callback={this.handleSwitcherUpdate(option.id)}
                            key={option.id}
                            {...option}
                        />)) }
            </main>
        );
    }
}

CreateEmpty.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    updateTitle: PropTypes.func.isRequired,
    updateSwitcher: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    createCollection: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    history: PropTypes.any.isRequired,
};

export default connect(
    state => ({
        description: state.createCollection.description,
        title: state.createCollection.title,
        user: state.user.data,
        data: state.createCollection,
        token: state.app.token,
    }),
    { updateTitle, updateSwitcher, createCollection },
)(withRouter(CreateEmpty));
