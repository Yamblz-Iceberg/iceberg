import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon } from '../../../blocks';

import './create-empty-header.scss';

import { cardBlue } from '../../../variables.scss';

import { createCollection } from '../../../reducers/create-collection.reducer';


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

        if ((title && currTitle !== title) ||
            (description && currDescription !== description) ||
            (hashTags && currHashTags !== hashTags)
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

    changeRoute = () => {
        this.props.history.push({ pathname: './feed' });
    };

    hexToRGB = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        return `rgb(${r}, ${g}, ${b})`;
    };

    handleSubmitData = () => {
        const body = {
            description: this.props.description,
            name: this.props.title,
            photo: 'https://pp.userapi.com/c543100/v543100915/2fbfb/IoVG_UEW-yw.jpg',
            color: this.hexToRGB(cardBlue),
            tags: ['59a7e38c7db98b35471fed6d', '59a7e38c7db98b35471fed67'],
        };

        this.props.createCollection(body, this.props.token, this.changeRoute);
    };


    render() {
        return (
            <header className="create-empty-header">
                <NavLink to={'/feed'}>
                    <Icon iconName={'arrow-back'} />
                </NavLink>
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
};

CreateEmptyHeader.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    hashTags: PropTypes.array,
    token: PropTypes.string.isRequired,
    createCollection: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired,
};

export default connect(
    state => ({
        title: state.createCollection.title,
        description: state.createCollection.description,
        hashTags: state.createCollection.hashTags,
        token: state.app.token,
    }),
    { createCollection },
)(withRouter(CreateEmptyHeader));
