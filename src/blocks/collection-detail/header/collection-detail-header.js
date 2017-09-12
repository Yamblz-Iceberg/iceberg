import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Icon, ContextMenu } from '../../../blocks';
import { clearCollection, removeCollection } from '../../../reducers/collection.reducer';
import { socialSharing } from '../../../utils/shared-functions';

import './collection-detail-header.scss';

class CollectionDetailHeader extends Component {
    static propTypes = {
        collectionTitle: PropTypes.string.isRequired,
        collectionId: PropTypes.string,
        history: PropTypes.any.isRequired,
        shareLink: PropTypes.func.isRequired,
        clearCollection: PropTypes.func.isRequired,
        removeCollection: PropTypes.func.isRequired,
        isAuthor: PropTypes.bool.isRequired,
        token: PropTypes.string.isRequired,
    };

    static defaultProps = {
        collectionId: null,
    }

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
        this.props.clearCollection();
    };

    handleGoHome = () => {
        this.props.history.push({ pathname: '/feed' });
        this.props.clearCollection();
    };

    removeCollection = (id) => {
        this.props.removeCollection(id, this.props.token);
        this.handleGoBack();
    }

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
                icon: <Icon iconName={'like-filled'} iconColor={'#777'} iconWidth="18" iconHeight="20" />,
            },
            {
                title: 'Пожаловаться',
                id: 2,
                /* eslint-disable no-alert */
                onClick: () => { alert('Ябеда!'); },
                icon: <Icon iconName={'question'} iconColor={'#777'} />,
            },
        ];
        // если коллекция принадлежит пользователю, разрешаем удаление
        if (this.props.isAuthor) {
            contextMenuItems.push({
                title: 'Удалить подборку',
                id: 3,
                onClick: () => {
                    this.removeCollection(this.props.collectionId);
                },
                icon: <Icon iconName={'close'} iconColor={'#777'} />,
            });
        }
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

export default
connect(state => ({
    token: state.authorization.access_token,
}), { clearCollection, removeCollection })(withRouter(CollectionDetailHeader));
