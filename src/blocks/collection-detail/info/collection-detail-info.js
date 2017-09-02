import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { ToggleText } from '../../index';
import { HashTag, Icon, Button, CardFooter } from '../../../blocks';

import './collection-detail-info.scss';

class CollectionDetailInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showAllText: false,
            collection: {
                description: '',
                photo: '',
                author: {
                    firstName: '',
                    lastName: '',
                    photo: '',
                },
                name: '',
                tags: [],
                links: [],
                savedTimesCount: 0,
            },
        };
    }
    componentWillReceiveProps(props) {
        this.setState({ collection: props.collection });
    }

    createLink = () => {
        this.props.history.push({ pathname: './create-link' });
    };

    render() {
        const collection = this.state.collection;

        console.log(collection);

        const avatarOptions = {
            size: '25',
            photo: collection.author.photo,
            iconColor: '#fff',
        };

        const userName = `${collection.author.firstName} ${collection.author.lastName}`;

        return (
            <section>
                <div className="collection-detail-info">
                    <div className="collection-detail-card">
                        <div
                            className="collection-detail-card__img"
                            style={{ backgroundImage: `url(${collection.photo})` }}
                        />

                        <div className="collection-detail-card__info">
                            <div className="collection-detail-card__header">
                                {collection.tags.map(hash => (
                                    <HashTag
                                        {...hash}
                                        size={'small'}
                                        key={hash._id}
                                    />)) }
                                <h2 className="collection-detail-card__title">{ collection.name }</h2>
                            </div>

                            <CardFooter
                                avatarOptions={avatarOptions}
                                userName={userName}
                                linksCount={collection.links.length}
                                savedTimesCount={collection.savedTimesCount}
                            />
                        </div>

                        <div className="collection-detail-card__overlay" />
                    </div>

                    <ToggleText text={this.state.collection.description} />

                    <div className="collection-detail-actions">
                        <Button {...{
                            icon: <Icon iconName={'save-big'} />,
                            text: 'подписаться',
                        }}
                        />
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
    history: PropTypes.any.isRequired,
};

export default withRouter(CollectionDetailInfo);
