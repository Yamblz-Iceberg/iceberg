import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLinkToCollection } from '../../../reducers/link.reducer';

import { Icon, Button } from '../../../blocks';

import './create-link-header.scss';

class AddLinkHeader extends Component {
    handleGoBack = () => {
        if (this.props.title !== 'комментарий') {
            this.props.history.replace({ pathname: `/collection/${this.props.collection._id}` });
        } else {
            this.props.history.goBack();
        }
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
            >
                <div className="create-link-header__container">
                    <div className="create-link-header__block">
                        <span onClick={this.handleGoBack}>
                            <Icon iconName={'arrow-back'} iconColor="#000" />
                        </span>
                        <h4 className="create-link-header__title">
                            {this.props.title}
                        </h4>
                    </div>
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

AddLinkHeader.propTypes = {
    title: PropTypes.string.isRequired,
    showAddButton: PropTypes.bool.isRequired,
    collection: PropTypes.object.isRequired,
    link: PropTypes.object.isRequired,
    description: PropTypes.string,
    token: PropTypes.string.isRequired,
    addLinkToCollection: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired,
};

AddLinkHeader.defaultProps = {
    description: '',
};

export default connect(
    state => ({
        token: state.app.token,
        link: state.link.result,
        description: state.link.description,
        collection: state.collection,
    }),
    { addLinkToCollection },
)(withRouter(AddLinkHeader));
