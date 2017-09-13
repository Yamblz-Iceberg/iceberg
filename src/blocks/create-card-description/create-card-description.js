import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { LimitedTextarea } from '../';
import CreateCardDescriptionHeader from './__header/create-card-description__header';
import { updateDescription } from '../../reducers/create-collection.reducer';

import './create-card-description.scss';

/*
Компонент экрана добавления описания при создании коллекции.
Состоит из шапки с кнопкой перехода на экран создания коллекции
и контекстным меню с возможностью очистить описание, ограниченным полем "textarea".
Дочерний компонент "textarea" работает с полем "createCollection" из "redux state"
*/
class CreateDescription extends Component {
    static propTypes = {
        updateDescription: PropTypes.func.isRequired,
        description: PropTypes.string.isRequired,
    }

    constructor() {
        super();
        this.state = {
            resetText: false,
        };
    }

    setTextContent = (flag) => {
        this.setState({
            resetText: flag,
        });
    };

    resetTextContent = () => {
        this.setTextContent(!this.state.resetText);
        this.props.updateDescription('');
    };

    handleTextContentChange = (value) => {
        this.props.updateDescription(value);
    };

    render() {
        return (
            <main className="create-description">
                <CreateCardDescriptionHeader callback={this.resetTextContent} />
                <div className="create-description__limited-textarea">
                    <LimitedTextarea
                        max={300}
                        handleChange={this.handleTextContentChange}
                        resetTextContent={this.state.resetText}
                        initialText={this.props.description}
                    />
                </div>
            </main>
        );
    }
}

export default connect(
    state => ({ description: state.createCollection.description }),
    { updateDescription },
)(CreateDescription);
