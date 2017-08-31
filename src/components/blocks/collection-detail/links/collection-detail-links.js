import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LinkCard } from '../../index';

import './collection-detail-links.scss';

class CollectionDetailLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [],
        };
    }

    componentWillReceiveProps(props) {
        this.setState({ links: props.links });
    }

    render() {
        return (
            <section className="collection-detail-links">
                {this.state.links.map(link => (
                    <div className="collection-detail-links__item" key={link._id}>
                        <LinkCard data={link} />
                    </div>
                ))}
            </section>
        );
    }
}

CollectionDetailLinks.propTypes = {
    links: PropTypes.array.isRequired,
};

export default CollectionDetailLinks;
