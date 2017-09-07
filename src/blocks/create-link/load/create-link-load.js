import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createLink } from '../../../reducers/link.reducer';
import { LinkCard, Button, Icon } from '../../../blocks';
import CreateLinkHeader from '../header/create-link-header';
import { Preloader } from '../../../blocks';

import './create-link-load.scss';

class CreateLinkLoad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddButton: true,
        };
    }

    componentDidMount() {
        const enteredUrl = this.props.history.location.state;
        const linkUrl = (enteredUrl.startsWith('http://') || enteredUrl.startsWith('https://'))
            ? enteredUrl
            : `http://${enteredUrl}`;
        const data = { link: linkUrl };
        this.props.createLink(data, this.props.token);
    }

    componentWillReceiveProps(props) {
        this.setState({
            ...this.state,
            link: props.link,
            description: props.description,
            isCreated: props.isCreated,
            user: props.user,
        });
    }

    addComment = () => {
        this.props.history.push('./load-link/add-comment');
    }

    renderLinkButton = () => (
        <Button
            text="комментарий"
            icon={<Icon iconName="plus" />}
            background="#fff"
            size="max-width"
            onClick={this.addComment}
        />
    )

    renderLink = () => {
        if (this.props.loader) {
            return (
                <Preloader />
            );
        }

        const cardLink = this.props.link;
        cardLink.userAdded = this.props.user;
        cardLink.description = this.props.description;

        cardLink.likes = 0;
        cardLink.savedTimesCount = 0;

        return (
            <LinkCard
                data={cardLink}
                button={this.props.description.length === 0
                && this.props.link.name.length > 0 ? this.renderLinkButton() : null}
                isTransparent
                editIcon={
                    <span onClick={this.addComment}>
                        <Icon iconName={'edit'} />
                    </span>
                }
            />
        );
    }

    render() {
        return (
            <div>
                <CreateLinkHeader
                    title={this.props.link.name}
                    showAddButton={this.state.showAddButton}
                />
                <div className="create-link-load">
                    { this.renderLink() }
                </div>
            </div>
        );
    }
}

CreateLinkLoad.propTypes = {
    createLink: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    history: PropTypes.any.isRequired,
    link: PropTypes.object.isRequired,
    isCreated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    description: PropTypes.string,
    loader: PropTypes.bool.isRequired,
};

CreateLinkLoad.defaultProps = {
    description: '',
};

export default connect(
    state => ({
        token: state.authorization.access_token,
        user: state.user.data,
        link: state.link.result,
        description: state.link.description,
        isCreated: state.link.created,
        loader: state.loader,
    }),
    { createLink },
)(withRouter(CreateLinkLoad));
