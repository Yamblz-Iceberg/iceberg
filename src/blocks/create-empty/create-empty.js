import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button, Icon } from '../../blocks';
import { CreateCard, Option, ToggleText } from '../../blocks';
import CreateEmptyHeader from './header/create-empty-header';

import {
    updateTitle,
    updateSwitcher,
} from '../../reducers/create-collection.reducer';

import './create-empty.scss';

/*
Компонент экрана создания новой коллекции. Состоит из хедера, карточки создания
коллекции, кнопки с переходом на экран редактирования описания и options элементов.
Дочерние компоненты работают с полем "createCollection" стора.
*/
class CreateEmpty extends Component {
    static propTypes = {
        description: PropTypes.string,
        title: PropTypes.string,
        user: PropTypes.object.isRequired,
        updateTitle: PropTypes.func.isRequired,
        updateSwitcher: PropTypes.func.isRequired,
        data: PropTypes.object.isRequired,
    }

    static defaultProps = {
        description: '',
        title: '',
    }

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
    };

    handleTitleUpdate = (value) => {
        this.props.updateTitle(value);
        this.setTitle(value);
    };

    handleSwitcherUpdate = name => value => this.props.updateSwitcher(name, value);

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
                name: 'closed',
                option: 'Личная подборка',
                noticeText: 'Данная подборка будет видна только вам',
            },
        ];

        const editDescriptionIcon = (
            <NavLink to={'/add-description'} className="create-empty__edit-description">
                <Icon iconName={'edit'} />
            </NavLink>
        );

        return (
            <div className="create-empty">
                <CreateEmptyHeader />
                <div className="create-empty__card-wrapper">
                    <CreateCard data={createCardProps} />
                </div>
                {description === ''
                    ? (
                        <NavLink
                            to={'/add-description'}
                            className="create-empty__add-description"
                        >
                            <Button
                                icon={<Icon iconName={'plus'} />}
                                text="Добавить описание"
                                background="rgba(255, 255, 255, 0)"
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
                            callback={this.handleSwitcherUpdate(option.name)}
                            key={option.id}
                            {...option}
                        />))
                }
            </div>
        );
    }
}

export default connect(
    state => ({
        description: state.createCollection.description,
        title: state.createCollection.title,
        user: state.user.data,
        data: state.createCollection,
    }),
    { updateTitle, updateSwitcher },
)(CreateEmpty);
