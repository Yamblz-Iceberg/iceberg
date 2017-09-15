import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteCollectionFromSaved, setCollectionAsSaved } from '../../reducers/collection.reducer';
import { changeSavedStatusOfCardById } from '../../reducers/feed.reducer';
import { HashTag, CardFooter } from './../../blocks';

import './collection-card.scss';

class CollectionCard extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        token: PropTypes.string.isRequired,
        userData: PropTypes.object.isRequired,
        setCollectionAsSaved: PropTypes.func.isRequired,
        deleteCollectionFromSaved: PropTypes.func.isRequired,
        changeSavedStatusOfCardById: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
        // необязательный параметр для только что созданной коллекции
        isNew: PropTypes.bool,
    };

    static defaultProps = {
        isNew: false,
    }

    putToSaved = () => {
        if (typeof this.props.userData.accType !== 'undefined' && this.props.userData.accType !== 'demo') {
            this.props.setCollectionAsSaved(this.props.data._id, this.props.token);
            this.props.changeSavedStatusOfCardById(this.props.data._id, true);
        } else {
            localStorage.setItem('returnToAfterAuth', this.props.history.location.pathname);
            this.props.history.push('/authorization');
        }
    };

    delFromSaved = () => {
        this.props.deleteCollectionFromSaved(this.props.data._id, this.props.token);
        this.props.changeSavedStatusOfCardById(this.props.data._id, false);
    };

    openCollection = cardId => () => {
        this.props.history.push({ pathname: `/collection/${cardId}`, isNew: this.props.isNew });
    };

    render() {
        const { data } = this.props;

        const hashes = data.tags;

        const cardStyles = {
            background: `${data.color} url(${data.photo})`,
        };

        const avatarOptions = {
            size: '25',
            photo: data.author.photo,
            iconColor: '#fff',
        };

        const userName = `${data.author.firstName} ${data.author.lastName}`;

        const hashesCount = hashes.length - 1;
        return (
            <div className="collection-card" style={cardStyles} onClick={this.openCollection(data._id)}>
                <div className="collection-card__header">
                    {
                        hashes[0] && <HashTag
                            name={hashes[0].name}
                            size={'small'}
                            key={hashes[0]._id}
                            id={hashes[0]._id}
                        />
                    }
                    {
                        (hashesCount > 0) && <div className="hash-tag hash-tag--small hash-tag__count">
                            <span className="hash-tag__text">{`+ ${hashesCount}`}</span>
                        </div>
                    }
                    <h2 className="collection-card__title">{ data.name }</h2>
                </div>

                <CardFooter
                    idCard={data._id}
                    avatarOptions={avatarOptions}
                    userName={userName}
                    userId={data.author.userId}
                    linksCount={data.linksCount}
                    savedTimesCount={data.savedTimesCount}
                    saved={data.saved}
                    putToSaved={this.putToSaved}
                    delFromSaved={this.delFromSaved}
                />

                { data.photo ? <div className="collection-card__overlay" /> : null }
            </div>
        );
    }
}

export default connect(
    state => ({
        token: state.authorization.access_token,
        userData: state.user.data,
    }),
    { setCollectionAsSaved, deleteCollectionFromSaved, changeSavedStatusOfCardById },
)(withRouter(CollectionCard));
