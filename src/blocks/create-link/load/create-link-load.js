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
            description: '',
            isCreated: false,
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
    };
    render() {
        const showAddButton = true;
        const showFooter = false;
        const linkButton = () => (
            <Button
                text="комментарий"
                icon={<Icon iconName="plus" />}
                background="#fff"
                size="max-width"
                onClick={this.addComment}
            />
        );
        const cardLink = this.state.link;
        cardLink.userAdded = this.state.user;
        cardLink.description = this.state.description;
        return (
            <main>
                <CreateLinkHeader
                    title={this.state.link.name}
                    showAddButton={showAddButton}
                />
                <section className="create-link-load">
                    <LinkCard
                        data={cardLink}
                        button={this.state.description.length === 0
                        && this.state.link.name.length > 0 ? linkButton() : null}
                        showFooter={showFooter}
                        editIcon={
                            <span onClick={this.addComment}>
                                <Icon iconName={'edit'} />
                            </span>
                        }
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
    description: PropTypes.string,
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
    }),
    { createLink },
)(withRouter(CreateLinkLoad));
