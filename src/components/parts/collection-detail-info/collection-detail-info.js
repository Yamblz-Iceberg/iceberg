import React, { Component } from 'react';
import { CollectionDetailHeader } from '../../blocks/index';
// import PropTypes from 'prop-types';
import './collection-detail-info.scss';
import { HashTag, Icon } from '../../elements';


/* eslint-disable */
class CollectionDetailInfo extends Component {
    constructor(props) {
        super(props);
        this.hashes = [{id: '1', name: 'tag1'}, {id: '2', name: 'tag2'}];
        this.hashStyle = {
            className: 'hash-tag--small',
            color: 'rgba(0,0,0, .5)',
        };
    }
    render() {
        return (
            <section>
                <div className="collection-detail-info">
                    <div className="collection-detail-card__wrapper"></div>
                    <div className="collection-detail-card">
                        <CollectionDetailHeader collectionTitle={'Test'} />
                        <div className="collection-detail-card__info">
                            { this.hashes.map(hash => (
                                <HashTag
                                    {...Object.assign(hash, this.hashStyle)}
                                    key={hash._id}
                                />)) }
                            <h2 className="collection-card__title">{'Айсберг'}</h2>
                            <div className="template-card-footer__user">
                                {/* <Avatar {...avatarOptions} /> */}
                                {/* <span className="template-card-footer__user-name">{data.userName}</span> */}
                            </div>

                            <div className="template-card-footer__actions">
                                <div className="template-card-footer__link-action">
                                    <Icon iconName={'link'} iconWidth={'22'} iconHeight={'14'} iconColor={'#fff'} />
                                    <span>{10}</span>
                                </div>
                                <div className="template-card-footer__save-action">
                                    <Icon iconName={'save-big'} iconWidth={'16'} iconHeight={'20'} iconColor={'#fff'} />
                                    <span>{16}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CollectionDetailInfo;
