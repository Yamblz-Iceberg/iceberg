import Hypher from 'hypher';
import Ru from 'hyphenation.ru';
import En from 'hyphenation.en-us';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setCollectionAsSaved, deleteCollectionFromSaved } from '../../../reducers/collection.reducer';
import { HashTape, Icon, Button, CardFooter, ToggleText } from '../../../blocks';
import { socialSharing } from '../../../utils/shared-functions';

import './collection-detail-info.scss';

class CollectionDetailInfo extends Component {
    static propTypes = {
        collection: PropTypes.object.isRequired,
        token: PropTypes.string.isRequired,
        userData: PropTypes.object.isRequired,
        history: PropTypes.any.isRequired,
        setCollectionAsSaved: PropTypes.func.isRequired,
        deleteCollectionFromSaved: PropTypes.func.isRequired,
    };

    createLink = () => {
        this.props.history.replace({ pathname: '/create-link' });
    };

    putToSaved = () => {
        if (typeof this.props.userData.accType !== 'undefined' &&
        this.props.userData.accType !== 'demo') {
            this.props.setCollectionAsSaved(
                this.props.collection._id,
                this.props.token,
            );
        } else {
            localStorage.setItem('returnToAfterAuth', this.props.history.location.pathname);
            this.props.history.push('/authorization');
        }
    };

    delFromSaved = () => {
        this.props.deleteCollectionFromSaved(
            this.props.collection._id,
            this.props.token,
        );
    };

    shareLink = (title, message) => () => {
        socialSharing(title, message);
    };

    render() {
        const { collection, userData } = this.props;

        const avatarOptions = {
            size: '25',
            photo: collection.author.photo,
            iconColor: '#fff',
        };

        const userName = `${collection.author.firstName} ${collection.author.lastName}`;
        const ruText = new Hypher(Ru);
        const enText = new Hypher(En);
        const hyphenateText = text => (enText.hyphenateText(ruText.hyphenateText(text, 10), 10));
        return (
            <section>
                <div className="collection-detail-info">
                    <div className="collection-detail-card">
                        <div
                            className="collection-detail-card__img"
                            style={{ backgroundImage: `url(${collection.photo})` }}
                        />

                        <div className="collection-detail-card__info">
                            <div className="collection-detail-card__tape">
                                <HashTape hashes={collection.tags} size="small" />
                            </div>
                            <div className="collection-detail-card__header">
                                <h2 className="collection-detail-card__title">
                                    { hyphenateText(collection.name) }
                                    { collection.closed && (
                                        <span className="collection-detail-card__lock-icon-wrapper">
                                            <Icon iconColor="white" iconName="lock" />
                                        </span>
                                    ) }
                                </h2>
                            </div>
                            <div className="collection-detail-card__footer">
                                <CardFooter
                                    idCard={collection._id}
                                    avatarOptions={avatarOptions}
                                    userId={collection.author.userId}
                                    userName={userName}
                                    linksCount={collection.links.length}
                                    savedTimesCount={collection.savedTimesCount}
                                    saved={collection.saved}
                                    putToSaved={this.putToSaved}
                                    delFromSaved={this.delFromSaved}
                                />
                            </div>
                        </div>

                        <div className="collection-detail-card__overlay" />
                    </div>

                    <ToggleText text={this.props.collection.description} />

                    <div className="collection-detail-actions">
                        <Button
                            onClick={this.shareLink(collection.name, collection.description)}
                            icon={<Icon iconName={'share'} />}
                            text="Поделиться"
                            size="max-width"
                        />
                        { collection.author.userId === userData.userId
                            ? <button className="collection-detail-actions__add-link" onClick={this.createLink}>
                                <Icon iconName={'link'} />
                                <Icon iconName={'plus'} />
                            </button>
                            : null
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(
    state => ({
        collection: state.collection,
        token: state.authorization.access_token,
        userData: state.user.data,
    }),
    { setCollectionAsSaved, deleteCollectionFromSaved },
)(withRouter(CollectionDetailInfo));
