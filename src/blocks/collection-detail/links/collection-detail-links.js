import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { LinkCard } from '../../index';

import { actions as modalActions } from '../../../reducers/modal.reducer';

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
    /* eslint class-methods-use-this: ["error", { "exceptMethods": ["openLink"] }] */
    openLink(href, readerMode) {
        if (window.cordova) {
            window.SafariViewController.isAvailable((available) => {
                if (available) {
                    window.SafariViewController.show({
                        url: href,
                        hidden: false,
                        animated: false,
                        transition: 'curl',
                        enterReaderModeIfAvailable: readerMode,
                        tintColor: '#fff',
                        barColor: '#000',
                        controlTintColor: '#ffffff',
                    },
                    // success
                    () => {},
                    // error
                    () => {
                        this.props.showModal('ERROR_MESSAGE');
                    });
                } else {
                    window.open(href);
                }
            });
        } else {
            window.open(href);
        }
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
                    <div className="collection-detail-links__item" key={link._id} onClick={() => this.openLink(link.url)}>
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
    showModal: PropTypes.func.isRequired,
};

CollectionDetailLinks.defaultProps = {
    filter: '',
};

function mapStateToProps(state) {
    return {
        link: state.user,
    };
}


export default
connect(mapStateToProps, { ...modalActions })(withRouter(CollectionDetailLinks));
