import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createLink, clearLink } from '../../../reducers/link.reducer';
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
            comment: props.comment,
            isCreated: props.isCreated,
            user: props.user,
        });
    }
    componentWillUnmount() {
        this.props.clearLink();
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
        cardLink.comment = this.state.comment;
        return (
            <main>
                <CreateLinkHeader
                    title={this.state.link.name}
                    showAddButton={showAddButton}
                />
                <section className="create-link-load">
                    <LinkCard
                        data={cardLink}
                        button={this.state.comment.length === 0
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
    clearLink: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    history: PropTypes.any.isRequired,
    link: PropTypes.object.isRequired,
    isCreated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    comment: PropTypes.string,
};

CreateLinkLoad.defaultProps = {
    comment: '',
};

export default connect(
    state => ({
        token: state.app.token,
        user: state.user.data,
        link: state.link.result,
        comment: state.link.comment,
        isCreated: state.link.created,
    }),
    { createLink, clearLink },
)(withRouter(CreateLinkLoad));
