import React, { Component } from 'react';
import { connect } from 'react-redux';
import { collectionLoader } from '../../../reducers/collection.reducer';
import { LinkCard } from '../../blocks';

import './collection-detail-links.scss';

/* eslint-disable */
class CollectionDetailLinks extends Component {
    componentDidMount() {
        const { collectionId } = this.props;
        this.props.collectionLoader(collectionId);
    }

    render() {
        const { collection } = this.props;

        return (
            <section className="collection-detail-links">
                {collection.links.map(link => (
                    <div className="collection-detail-links__item" key={link._id}>
                        <LinkCard data={link} />
                    </div>
                ))}
            </section>
        );
    }
}

export default connect(
    state => ({ collection: state.collection }),
    { collectionLoader }
)(CollectionDetailLinks);
