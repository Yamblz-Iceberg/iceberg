import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './creating-successfully.scss';

import { CollectionCard, Button, Icon } from '../../blocks';
import CreatingSuccessfullyHeader from './header/creating-successfully-header';
import { handleClickToCollection, socialSharing } from '../../utils/shared-functions';

class CreatingSuccessfully extends Component {
    componentWillMount() {
        const {
            links,
            savedTimesCount,
            history,
        } = this.props;

        const collection = {
            ...history.location.state.collection,
            savedTimesCount,
            linksCount: links.length,
        };

        this.setCollection(collection);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.links !== nextProps.links) {
            this.setLinks(nextProps.links);
        }
    }

    setCollection = (collection) => {
        this.setState({
            collection,
        });
    }

    setLinks = (links) => {
        this.setLinks({
            collection: {
                ...this.state.collection,
                links,
            },
        });
    }

    handleClick = cardId => (e) => {
        handleClickToCollection(e, cardId, this.props.history);
    }

    shareLink = (title, message) => {
        socialSharing(title, message);
    }

    render() {
        const { collection } = this.state;

        return (
            <div className="creating-successfully">
                <CreatingSuccessfullyHeader closed={collection.closed} />
                <div
                    className="creating-successfully__collection-card-wrapper"
                    onClick={this.handleClick(collection._id)}
                >
                    <CollectionCard data={collection} />
                </div>
                <div className="creating-successfully__button-wrapper">
                    <Button
                        onClick={this.shareLink(collection.name, collection.description)}
                        icon={<Icon iconName={'share'} />}
                        text="Поделиться"
                    />
                </div>
            </div>
        );
    }
}

CreatingSuccessfully.defaultProps = {
    links: [],
    savedTimesCount: 0,
};

CreatingSuccessfully.propTypes = {
    history: PropTypes.any.isRequired,
    links: PropTypes.array,
    savedTimesCount: PropTypes.number,
};

export default connect(
    state => ({
        links: state.collection.links,
        savedTimesCount: state.collection.savedTimesCount,
    }),
)(withRouter(CreatingSuccessfully));
