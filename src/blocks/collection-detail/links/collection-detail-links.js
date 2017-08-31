import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { LinkCard } from '../../index';

import { actions as linkActions } from './../../../reducers/link.reducer';

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

    handlerOnClick(e, link) {
        this.props.openUrl(link);
        this.props.history.push({ pathname: './preview' });
    }

    render() {
        return (
            <section className="collection-detail-links">
                {this.state.links.map(link => (
                    <div className="collection-detail-links__item" key={link._id} onClick={e => this.handlerOnClick(e, link)}>
                        <LinkCard data={link} />
                    </div>
                ))}
            </section>
        );
    }
}

CollectionDetailLinks.propTypes = {
    links: PropTypes.array.isRequired,
    history: PropTypes.any.isRequired,
    openUrl: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        link: state.user,
    };
}


export default connect(mapStateToProps, { ...linkActions })(withRouter(CollectionDetailLinks));
