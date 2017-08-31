import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { ToggleText } from '../../index';
import { HashTag, Icon, Avatar, Button } from '../../../blocks';

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
            },
        };
    }
    componentWillReceiveProps(props) {
        this.setState({ collection: props.collection });
    }

    createLink = () => {
        this.props.history.push({ pathname: './create-link' });
    }

    render() {
        const avatarOptions = {
            size: '25',
            photo: this.state.collection.author.photo,
            iconColor: '#fff',
        };

        return (
            <section>
                <div className="collection-detail-info">
                    <div className="collection-detail-card">
                        <div
                            className="collection-detail-card__img"
                            style={{ backgroundImage: `url(${this.state.collection.photo})` }}
                        />

                        <div className="collection-detail-card__info">
                            <div>
                                {this.state.collection.tags.map(hash => (
                                    <HashTag
                                        {...hash}
                                        size={'small'}
                                        key={hash._id}
                                    />)) }
                                <h2 className="collection-detail-card__title">{ this.state.collection.name }</h2>
                            </div>

                            <div className="template-card-footer">
                                <div className="template-card-footer__user">
                                    <Avatar {...avatarOptions} />
                                    <span className="template-card-footer__user-name">
                                        {`${this.state.collection.author.firstName} ${this.state.collection.author.lastName}`}
                                    </span>
                                </div>

                                <div className="template-card-footer__actions">
                                    <div className="template-card-footer__link-action">
                                        <Icon iconName={'link'} iconColor={'#fff'} />
                                        <span>{10}</span>
                                    </div>
                                    <div className="template-card-footer__save-action">
                                        <Icon iconName={'save-big'} iconColor={'#fff'} />
                                        <span>{16}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
