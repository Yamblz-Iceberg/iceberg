import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { CollectionDetailHeader, ToggleText } from '../../blocks';
import { HashTag, Icon, Avatar, Button } from '../../elements';
import { collectionLoader } from '../../../reducers/collection.reducer';

import './collection-detail-info.scss';


/* eslint-disable */
class CollectionDetailInfo extends Component {
    componentDidMount() {
        const { collectionId } = this.props;
        this.props.collectionLoader(collectionId);
    }

    constructor(props) {
        super(props);
        this.state =  {
            showAllText: false,
            collection: {
                description: '',
            },
        };
    }

    createLink = () => {
        this.props.history.push({ pathname: './create-link' });
    }

    componentWillReceiveProps() {
        this.setState({collection: this.props.collection});
    }

    render() {
        const { collection } = this.props;

        const avatarOptions = {
            size: '25',
            photo: collection.author.photo,
            iconColor: '#fff',
        };

        return (
            <section>
                <div className="collection-detail-info">
                    <div className="collection-detail-card">
                        <div className="collection-detail-card__img"
                             style={{ backgroundImage: `url(${collection.photo})` }}>
                        </div>

                        <CollectionDetailHeader collectionTitle={ collection.name } />

                        <div className="collection-detail-card__info">
                            <div>
                                {collection.tags.map(hash => (
                                    <HashTag
                                        {...hash}
                                        size={'small'}
                                        key={hash._id}
                                    />)) }
                                <h2 className="collection-detail-card__title">{ collection.name }</h2>
                            </div>

                            <div className="template-card-footer">
                                <div className="template-card-footer__user">
                                     <Avatar {...avatarOptions} />
                                     <span className="template-card-footer__user-name">
                                         {`${collection.author.firstName} ${collection.author.lastName}`}
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

export default connect(
    state => ({ collection: state.collection }),
    { collectionLoader }
)(withRouter(CollectionDetailInfo));
