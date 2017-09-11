import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { LinkCard, Preloader } from './../../../blocks';

import { actions as modalActions } from '../../../reducers/modal.reducer';
import { setLinkAsOpened } from '../../../reducers/link.reducer';
import { changeOpenStatusOfLinkById } from '../../../reducers/collection.reducer';

import './collection-detail-links.scss';

class CollectionDetailLinks extends Component {
    static propTypes = {
        links: PropTypes.array.isRequired,
        filter: PropTypes.string,
        loader: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        filter: '',
    };

    render() {
        const filteredLinks = this.props.links.filter((link) => {
            if (this.props.filter === 'unread') {
                return link.opened !== true;
            }
            return link;
        });
        if (this.props.loader) {
            return (
                <Preloader />
            );
        }

        return (
            <section className="collection-detail-links">
                {
                    filteredLinks.map(link => (
                        <div className="collection-detail-links__item" key={link._id} onClick={e => this.openLink(link.url, link._id, e)}>
                            <LinkCard data={{ ...link }} />
                        </div>
                    ))
                }
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        links: state.collection.links,
        token: state.authorization.access_token,
        loader: state.loader,
    };
}


export default
connect(
    mapStateToProps,
    {
        ...modalActions,
        setLinkAsOpened,
        changeOpenStatusOfLinkById,
    })(withRouter(CollectionDetailLinks));
