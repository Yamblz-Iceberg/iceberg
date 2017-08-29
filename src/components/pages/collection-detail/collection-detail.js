import React, { Component } from 'react';
import { CollectionDetailInfo } from '../../parts';
// import PropTypes from 'prop-types';

/* eslint-disable */
class CollectionDetail extends Component {
    render() {
        return (
            <div>
                <CollectionDetailInfo collectionId={this.props.location.state} />
            </div>
        );
    }
}

export default (CollectionDetail);
