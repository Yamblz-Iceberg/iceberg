import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LinkCard } from '../../index';

import './collection-detail-links.scss';

class CollectionDetailLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [],
            filter: '',
        };
    }

    componentWillReceiveProps(props) {
        this.setState({ links: props.links });
    }

    render() {
        const filteredLinks = this.state.links.filter((link) => {
            if (this.props.filter !== '') {
                return link.name.length > 60;
            }
            return link;
        });
        return (
            <section className="collection-detail-links">
                {filteredLinks.map(link => (
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
    filter: PropTypes.string,
};

CollectionDetailLinks.defaultProps = {
    filter: '',
};

export default CollectionDetailLinks;
