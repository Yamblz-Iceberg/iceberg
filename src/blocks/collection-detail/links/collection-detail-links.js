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
        showModal: PropTypes.func.isRequired,
        setLinkAsOpened: PropTypes.func.isRequired,
        changeOpenStatusOfLinkById: PropTypes.func.isRequired,
        token: PropTypes.any.isRequired,
        loader: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        filter: '',
    };
    openLink(href, id) {
        if (window.cordova) {
            window.SafariViewController.isAvailable((available) => {
                if (available) {
                    window.SafariViewController.show({
                        url: href,
                        hidden: false,
                        animated: false,
                        transition: 'curl',
                        enterReaderModeIfAvailable: false,
                        tintColor: '#fff',
                        barColor: '#000',
                        controlTintColor: '#ffffff',
                    },
                    // success
                    () => {},
                    // error
                    () => {
                        this.props.showModal('ERROR_MESSAGE',
                            {
                                title: 'Упс!',
                                text: 'Такая ссылка не существует.',
                                buttonText: 'Понятно',
                            });
                    });
                } else {
                    window.open(href);
                }
            });
        } else {
            window.open(href);
        }
        this.props.setLinkAsOpened(id, this.props.token);
        this.props.changeOpenStatusOfLinkById(id);
    }

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
                        <div className="collection-detail-links__item" key={link._id} onClick={() => this.openLink(link.url, link._id)}>
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
