import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MyProfileHeader from './__header/my-profile__header';
import { MyProfileFeed, UserInfo, Tabs } from './../../blocks';

import { getCreatedCollections, getSavedLinks } from './../../reducers/bookmarks.reducer';

import './my-profile.scss';

/*
Компонент аккаунта, который используется для своего профиля. Состоит из шапки, блока с аватаркой 
пользователя и информацией о нем, блока с фильтрацией по подборкам и ссылкам, а также лентой 
подборок и ссылок. Лента делится на два блока: подборки и ссылки, навигация между которыми 
осуществляется по табам.
*/
class MyProfile extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        bookmarks: PropTypes.object.isRequired,
        token: PropTypes.string.isRequired,
        getCreatedCollections: PropTypes.func.isRequired,
        getSavedLinks: PropTypes.func.isRequired,
        loader: PropTypes.bool.isRequired,
        filter: PropTypes.string,
    };

    static defaultProps = {
        filter: '',
    };

    componentDidMount() {
        if (this.props.filter === 'links') {
            this.getSavedLinks();
        } else {
            this.getMyCollections();
        }
    }

    // Получение списка подборок пользователя
    getMyCollections = () => {
        this.props.getCreatedCollections(this.props.token, 'createdCollection');
    };

    // Получение списка ссылок пользователя
    getSavedLinks = () => {
        this.props.getSavedLinks(this.props.token, 'savedLinks');
    };

    render() {
        const { user, bookmarks } = this.props;

        const tabs = [
            {
                id: 1,
                title: 'Подборки',
                linkTo: '/profile',
            },
            {
                id: 2,
                title: 'Ссылки',
                linkTo: '/profile/links',
            },
        ];

        // Фильтр ссылок
        const linksFilters = [
            {
                id: 0,
                title: 'Новые',
                name: 'newLinks',
            },
            {
                id: 1,
                title: 'Прочитанные',
                name: 'openedLinks',
            },
            {
                id: 2,
                title: 'Добавленные мной',
                name: 'addedLinks',
            },
        ];

        // Фильтр коллекций
        const collectionsFilters = [
            {
                id: 0,
                title: 'Созданные мной',
                name: 'createdCollections',
            },
            {
                id: 1,
                title: 'Сохраненные',
                name: 'savedCollections',
            },
        ];

        // Фильтрация по табам: подборки или ссылки
        const filterItems = this.props.filter === 'links' ? linksFilters : collectionsFilters;
        const data = bookmarks.typeToFeed.toLowerCase().indexOf('links') > -1 ? bookmarks.links : bookmarks.collections;

        return (
            <div className="my-profile__wrapper">
                <MyProfileHeader />
                <UserInfo user={user} />
                <div className="my-profile__tabs-wrapper">
                    <Tabs tabs={tabs} />
                </div>
                <MyProfileFeed
                    data={data}
                    type={bookmarks.typeToFeed}
                    filterItems={filterItems}
                    loader={this.props.loader}
                />
            </div>
        );
    }
}

export default connect(
    state => ({
        user: state.user.data,
        token: state.authorization.access_token,
        bookmarks: state.bookmarks,
        typeToFeed: state.user.typeToFeed,
        loader: state.loader,
    }),
    { getCreatedCollections, getSavedLinks },
)(MyProfile);
