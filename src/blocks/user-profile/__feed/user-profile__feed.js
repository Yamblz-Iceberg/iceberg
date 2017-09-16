import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Preloader } from './../../../blocks';
import UserProfileFeedItem from './../__feed-item/user-profile__feed-item';

import './user-profile__feed.scss';

class UserProfileFeed extends Component {
    static propTypes = {
        data: PropTypes.array,
        loader: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        data: [],
    };

    renderFeed = () => {
        const { data, loader } = this.props;

        // Показываем лоадер, пока данные не пришли
        if (loader) {
            return (
                <div className="user-profile__feed-preloader">
                    <Preloader />
                </div>
            );
        } else if (data.length > 0) {
            // Когда пришли данные, показывае список открытых подборок
            return (
                <div className="user-profile__feed-list">
                    {
                        data.map(item => <UserProfileFeedItem key={item._id} data={item} />)
                    }
                </div>
            );
        }

        // Когда данные получены, но массив подборок пустой - показываем сообщение
        return (
            <div className="user-profile__feed-empty-block">
                <p className="user-profile__feed-message">Здесь пока пусто</p>
            </div>
        );
    };

    render() {
        return (
            <div>
                {this.renderFeed()}
            </div>
        );
    }
}

export default UserProfileFeed;
