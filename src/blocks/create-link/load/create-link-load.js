import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createLink } from '../../../reducers/link.reducer';
import { LinkCard, Button, Icon } from '../../../blocks';
import CreateLinkHeader from '../header/create-link-header';

import './create-link-load.scss';

class CreateLinkLoad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: {
                name: '',
            },
            user: {},
            comment: '',
            isCreated: false,
        };
    }
    componentDidMount() {
        const data = { link: this.props.history.location.state };
        this.props.createLink(data, this.props.token);
    }
    componentWillReceiveProps(props) {
        this.setState({
            ...this.state,
            link: props.link,
            isCreated: props.isCreated,
            user: props.user,
        });
    }
    addDescription = () => {
        this.props.history.push('./add-description');
    };
    render() {
        const showFooter = false;
        const linkButton = () => (
            <Button
                text="комментарий"
                icon={<Icon iconName="plus" />}
                background="#fff"
                size="max-width"
                onClick={this.addDescription}
            />
        );
        const cardLink = this.state.link;
        cardLink.userAdded = this.state.user;
        return (
            <main>
                <CreateLinkHeader
                    collectionTitle={this.state.link.name}
                />
                <section className="create-link-load">
                    <LinkCard
                        data={cardLink}
                        button={this.state.comment.length === 0 ? linkButton() : null}
                        showFooter={showFooter}
                    />
                </section>
            </main>
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
};

export default connect(
    state => ({
        token: state.app.token,
        user: state.user.data,
        link: state.link.result,
        isCreated: state.link.created,
    }),
    { createLink },
)(withRouter(CreateLinkLoad));
