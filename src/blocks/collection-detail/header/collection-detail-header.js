import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import { Icon } from '../../../blocks';

import './collection-detail-header.scss';

class CollectionDetailHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixedHeader: false,
        };

        this.scrollListener = _.throttle(this.scrollListener, 300).bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollListener);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollListener);
    }

    scrollListener = () => {
        if (window.scrollY > 20) {
            this.setState({ fixedHeader: true });
        } else if (this.state.fixedHeader) {
            this.setState({ fixedHeader: false });
        }
    }

    handleGoBack = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <header
                className={`collection-detail-header
                ${this.state.fixedHeader === true ? 'collection-detail-header--fixed' : ''}`}
            >
                <div className="collection-detail-header__container">
                    <div className="collection-detail-header__block">
                        <span onClick={this.handleGoBack}>
                            <Icon iconName={'arrow-back'} iconColor={this.state.fixedHeader ? '#000' : '#fff'} />
                        </span>
                    </div>
                    <h4 className="collection-detail-header__title">
                        {this.state.fixedHeader === true ? this.props.collectionTitle : false}
                    </h4>
                    <div className="collection-detail-header__block">
                        <Icon iconName={'more-vert'} iconColor={this.state.fixedHeader ? '#000' : '#fff'} />
                    </div>
                </div>
            </header>
        );
    }
}

CollectionDetailHeader.propTypes = {
    collectionTitle: PropTypes.string.isRequired,
    history: PropTypes.any.isRequired,
};

export default withRouter(CollectionDetailHeader);
