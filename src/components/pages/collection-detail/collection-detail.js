import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CollectionDetailInfo } from '../../parts';
import { collectionLoader } from '../../../reducers/collection.reducer';
// import PropTypes from 'prop-types';

/* eslint-disable */
class CollectionDetail extends Component {
    constructor(props) {
        super(props);
        this.props.collectionLoader(this.props.location.state);
        console.log(props);
    }
    render() {
        const { collection } = this.props;
        console.log('collection', collection);
        return (
            <div>
                <CollectionDetailInfo collection={collection} />
            </div>
        );
    }
}

export default connect(
    state => ({ collection: state.collection }),
    { collectionLoader }
)(CollectionDetail);
