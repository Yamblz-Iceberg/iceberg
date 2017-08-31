import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button, Icon } from '../../blocks';
import { CreateCard, Option, ToggleText } from '../index';
import CreateEmptyHeader from './header/create-empty-header';

import {
    updateTitle,
    updateSwitcher,
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

    handleSubmitData = e => e;

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
                <Icon iconName={'plus'} />
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
};

export default connect(
    state => ({
        description: state.createCollection.description,
        title: state.createCollection.title,
        user: state.user.data,
    }),
    { updateTitle, updateSwitcher },
)(CreateEmpty);
