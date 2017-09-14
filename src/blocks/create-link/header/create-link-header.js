import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLinkToCollection, removeLink } from '../../../reducers/link.reducer';

import { Icon, Button } from '../../../blocks';

import './create-link-header.scss';

class CreateLinkHeader extends Component {
    handleReturnToCreatingLink = () => {
        this.props.history.goBack();
    };

    handleReturnToCard = () => {
        this.props.history.replace({ pathname: `/collection/${this.props.collection._id}` });
        // удаляем недосозданную ссылку из БД
        if (this.props.link._id) { this.props.removeLink(this.props.link._id, this.props.token); }
    };

    addLink = () => {
        this.props.addLinkToCollection(
            this.props.collection._id,
            this.props.link._id,
            this.props.token,
            this.props.description,
            this.props.history.replace({ pathname: `/collection/${this.props.collection._id}/new` }),
        );
    };

    render() {
        return (
            <header
                className={`create-link-header
                ${this.props.showAddButton
                ? 'create-link-header--show-button'
                : ''}`}
                data-role="header"
                data-position="fixed"
                data-tap-toggle="false"
                data-update-page-padding="false"
                data-hide-during-focus="false"
            >
                <div className="create-link-header__container">
                    <div className="create-link-header__block">
                        {
                            !this.props.isLinkConstructor &&
                            <span onClick={this.handleReturnToCreatingLink} className="create-link-header__back-to-link">
                                <Icon iconName={'arrow-details'} />
                            </span>
                        }
                        {
                            this.props.isLinkConstructor &&
                            <span onClick={this.handleReturnToCard}>
                                <Icon iconName={'arrow-back'} />
                            </span>
                        }
                    </div>
                    <h4 className="create-link-header__title">
                        {this.props.title || 'Новая ссылка'}
                    </h4>
                    <div className="create-link-header__block create-link-header__button" onClick={this.addLink}>
                        <Button
                            text="Добавить"
                            size="small"
                            isDisabled={this.props.title.length === 0}
                        />
                    </div>
                </div>
            </header>
        );
    }
}

CreateLinkHeader.propTypes = {
    title: PropTypes.string.isRequired,
    showAddButton: PropTypes.bool.isRequired,
    isLinkConstructor: PropTypes.bool,
    collection: PropTypes.object.isRequired,
    link: PropTypes.object.isRequired,
    description: PropTypes.string,
    token: PropTypes.string.isRequired,
    addLinkToCollection: PropTypes.func.isRequired,
    removeLink: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired,
};

CreateLinkHeader.defaultProps = {
    description: '',
    isLinkConstructor: true,
};

export default connect(
    state => ({
        token: state.authorization.access_token,
        link: state.link.result,
        description: state.link.description,
        collection: state.collection,
    }),
    { addLinkToCollection, removeLink },
)(withRouter(CreateLinkHeader));
