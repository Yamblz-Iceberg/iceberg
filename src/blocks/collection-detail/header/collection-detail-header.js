import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import { Icon, ContextMenu } from '../../../blocks';
import { socialSharing } from '../../../utils/shared-functions';

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
    };

    shareLink = () => {
        socialSharing();
    };

    handleGoBack = () => {
        this.props.history.goBack();
    };

    handleGoHome = () => {
        this.props.history.push({ pathname: '/feed' });
    };

    render() {
        const contextMenuItems = [
            {
                title: 'Поделиться',
                id: 0,
                onClick: this.props.shareLink,
                icon: <Icon iconName={'share'} iconColor={'#777'} />,
            },
            {
                title: 'Не хочу видеть',
                id: 1,
                onClick: () => {},
                icon: <Icon iconName={'like-small'} iconColor={'#777'} iconWidth="18" iconHeight="20" />,
            },
            {
                title: 'Скрыть все от автора',
                id: 2,
                onClick: () => {},
                icon: <Icon iconName={'account'} iconColor={'#777'} />,
            },
            {
                title: 'Пожаловаться',
                id: 3,
                /* eslint-disable no-alert */
                onClick: () => { alert('Ябеда!'); },
                icon: <Icon iconName={'question'} iconColor={'#777'} />,
            },
        ];
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
                    <div className="collection-detail-header__block collection-detail-header__home-wrap" onClick={this.handleGoHome}>
                        <Icon iconName={'home'} iconColor={this.state.fixedHeader ? '#000' : '#fff'} />
                    </div>
                    <div className="collection-detail-header__block">
                        <ContextMenu iconColor={this.state.fixedHeader ? '#000' : '#fff'} items={contextMenuItems} />
                    </div>
                </div>
            </header>
        );
    }
}

CollectionDetailHeader.propTypes = {
    collectionTitle: PropTypes.string.isRequired,
    shareLink: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired,
};

export default withRouter(CollectionDetailHeader);
