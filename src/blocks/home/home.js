import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HomeHeader from './__header/home__header';
import { FloatingButton, HomeFeed } from './../../blocks';

import './home.scss';

/**
 * Компонент главного экрана приложения.
 * Состоит из шапки, самой ленты и кнопки добавления коллекции.
 */
class Home extends Component {
    static propTypes = {
        filter: PropTypes.string,
    };

    static defaultProps = {
        user: {},
        authorization: {},
        filter: 'rating',
    };

    componentDidUpdate = () => {
        this.scrollToTop();
    };

    scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    render() {
        return (
            <main className="home">
                <HomeHeader />
                <FloatingButton />
                <HomeFeed queryParam={this.props.filter} />
            </main>
        );
    }
}

export default Home;
