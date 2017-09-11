import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Icon, ContextMenu } from '../../../blocks';
import { clearCollection } from '../../../reducers/collection.reducer';

import './collection-detail-header.scss';

class CollectionDetailHeader extends Component {
    static propTypes = {
        collectionTitle: PropTypes.string.isRequired,
        history: PropTypes.any.isRequired,
        clearCollection: PropTypes.func.isRequired,
    };

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

    handleGoBack = () => {
        this.props.history.goBack();
        this.props.clearCollection();
    };

    handleGoHome = () => {
        this.props.history.push({ pathname: '/feed' });
        this.props.clearCollection();
    };

    render() {
        const contextMenuItems = [
            {
                title: 'Поделиться',
                id: 0,
                onClick: () => {},
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

export default connect(null, { clearCollection })(withRouter(CollectionDetailHeader));
