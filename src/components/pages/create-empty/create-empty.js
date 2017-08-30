import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button, Icon } from './../../elements';
import { CreateCard, CreateEmptyHeader, Option, ToggleText } from './../../blocks';

import {
    updateTitle,
    updateSwitcher,
} from '../../../reducers/create-collection.reducer';

import './create-empty.scss';

class CreateEmpty extends Component {
    handleSubmitData = e => e;

    handleTitleUpdate = (value) => {
        this.props.updateTitle(value);
    }

    handleSwitcherUpdate = id => value => this.props.updateSwitcher(id)(value);

    render() {
        const {
            description,
        } = this.props;

        const createCardProps = {
            userName: 'Pavel',
            avatar: '',
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

        return (
            <main className="create-empty">
                <CreateEmptyHeader callback={this.handleSubmitData} />
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
                            <ToggleText text={description} />
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
    updateTitle: PropTypes.func.isRequired,
    updateSwitcher: PropTypes.func.isRequired,
};

export default connect(
    state => ({ description: state.createCollection.description }),
    { updateTitle, updateSwitcher },
)(CreateEmpty);
