import Hypher from 'hypher';
import Ru from 'hyphenation.ru';
import En from 'hyphenation.en-us';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setCollectionAsSaved, deleteCollectionFromSaved } from '../../../reducers/collection.reducer';
import { ToggleText } from '../../index';
import { HashTape, Icon, Button, CardFooter } from '../../../blocks';

import './collection-detail-info.scss';

import { mainYellow } from '../../../variables.scss';

class CollectionDetailInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showAllText: false,
        };
    }

    createLink = () => {
        if (typeof this.props.userData.accType !== 'undefined' && this.props.userData.accType !== 'demo') {
            this.props.history.replace({ pathname: '/create-link' });
        } else {
            localStorage.setItem('returnToAfterAuth', this.props.history.location.pathname);
            this.props.history.push('/authorization');
        }
    };

    putToSaved = () => {
        if (typeof this.props.userData.accType !== 'undefined' && this.props.userData.accType !== 'demo') {
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

    render() {
        const collection = this.props.collection;

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
                                <h2 className="collection-detail-card__title">{ hyphenateText(collection.name) }</h2>
                            </div>
                            <div className="collection-detail-card__footer">
                                <CardFooter
                                    avatarOptions={avatarOptions}
                                    userId={collection.author.userId}
                                    userName={userName}
                                    linksCount={collection.links.length}
                                    savedTimesCount={collection.savedTimesCount}
                                    saved={collection.saved}
                                />
                            </div>
                        </div>

                        <div className="collection-detail-card__overlay" />
                    </div>

                    <ToggleText text={this.props.collection.description} />

                    <div className="collection-detail-actions">
                        {
                            collection.saved &&
                                <Button
                                    type="light"
                                    icon={<Icon iconName="save-small" iconColor={mainYellow} />}
                                    text="вы подписаны"
                                    size="max-width"
                                    onClick={this.delFromSaved}
                                />
                        }
                        {
                            !collection.saved &&
                                <Button
                                    icon={<Icon iconName="save-big" />}
                                    text="подписаться"
                                    size="max-width"
                                    onClick={this.putToSaved}
                                />
                        }
                        <button className="collection-detail-actions__add-link" onClick={this.createLink}>
                            <Icon iconName={'link'} />
                            <Icon iconName={'plus'} />
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

CollectionDetailInfo.propTypes = {
    collection: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    userData: PropTypes.object.isRequired,
    history: PropTypes.any.isRequired,
    setCollectionAsSaved: PropTypes.func.isRequired,
    deleteCollectionFromSaved: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        collection: state.collection,
        token: state.authorization.access_token,
        userData: state.user.data,
    }),
    { setCollectionAsSaved, deleteCollectionFromSaved },
)(withRouter(CollectionDetailInfo));
