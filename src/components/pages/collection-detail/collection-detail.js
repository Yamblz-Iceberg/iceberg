import React, { Component } from 'react';
import { CollectionDetailInfo } from '../../parts';
// import PropTypes from 'prop-types';

/* eslint-disable */
class CollectionDetail extends Component {
    constructor(props) {
        super(props);
        // this.collectionId = this.props.location.state;
    }
    render() {
        return (
            <div>
                <CollectionDetailInfo />
            </div>
        );
    }
}

export default CollectionDetail;
