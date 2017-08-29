import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CollectionDetailHeader } from '../../blocks/index';
import './collection-detail-info.scss';
import { HashTag, Icon, Avatar } from '../../elements';
import { collectionLoader } from '../../../reducers/collection.reducer';


/* eslint-disable */
class CollectionDetailInfo extends Component {
    componentDidMount() {
        const { collectionId } = this.props;
        this.props.collectionLoader(collectionId);
    }

    render() {
        const { collection } = this.props;
        console.log('collection', collection);

        const avatarOptions = {
            size: '25',
            photo: collection.author.photo,
            iconColor: '#fff',
        };

        return (
            <section>
                <div className="collection-detail-info">
                    <div className="collection-detail-card__wrapper"></div>
                    <div className="collection-detail-card">

                        <CollectionDetailHeader collectionTitle={ collection.name } />

                        <div className="collection-detail-card__info">
                            <div className="collection-detail-card__desc">
                                {collection.tags.map(hash => (
                                    <HashTag
                                        {...hash}
                                        size={'small'}
                                        key={hash._id}
                                    />)) }
                                <h2 className="collection-card__title">{ collection.name }</h2>
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
                </div>
            </section>
        );
    }
}

export default connect(
    state => ({ collection: state.collection }),
    { collectionLoader }
)(CollectionDetailInfo);
