import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon } from '../../../blocks';

import './create-empty-header.scss';

class CreateEmptyHeader extends Component {
    constructor() {
        super();
        this.state = {
            submitStatus: false,
        };
    }

    componentWillMount = () => {
        this.setSubmitStatus(this.props);
    }

    componentWillReceiveProps = (nextProps) => {
        const {
            title: currTitle,
            description: currDescription,
            hashTags: currHashTags,
        } = this.props;
        const { title, description, hashTags } = nextProps;

        if ((currTitle !== title) ||
            (currDescription !== description) ||
            (currHashTags !== hashTags)
        ) {
            this.setSubmitStatus(nextProps);
        }
    }

    setSubmitStatus = ({ title, description, hashTags }) => {
        this.setState({
            submitStatus: (
                title.length > 4 &&
                description.length > 0 &&
                hashTags.length > 0
            ),
        });
    }

    render() {
        const { submitCallback } = this.props;

        return (
            <header className="create-empty-header">
                <NavLink to={'/feed'}>
                    <Icon iconName={'arrow-back'} />
                </NavLink>
                <h4 className="create-empty-header__title">Новая тема</h4>
                <button
                    className={`create-empty-header__submit ${this.state.submitStatus ? 'create-empty-header__submit--active' : ''}`}
                    onClick={submitCallback}
                >Создать</button>
            </header>
        );
    }
}

CreateEmptyHeader.propTypes = {
    submitCallback: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    hashTags: PropTypes.array.isRequired,
};

export default connect(
    state => ({
        title: state.createCollection.title,
        description: state.createCollection.description,
        hashTags: state.createCollection.hashTags,
    }),
)(CreateEmptyHeader);
