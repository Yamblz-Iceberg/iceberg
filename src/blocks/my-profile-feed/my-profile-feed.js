import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MyProfileFeedItem, Preloader } from '../../blocks';
import MyProfileFeedFilter from './__filter/my-profile-feed__filter';

import './my-profile-feed.scss';

class MyProfileFeed extends Component {
    static propTypes = {
        data: PropTypes.array,
        type: PropTypes.string.isRequired,
        filterItems: PropTypes.array.isRequired,
        loader: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        data: [],
    };

    renderFeed = () => {
        const { data, type, loader } = this.props;

        if (loader) {
            return (
                <div className="my-profile-feed__preloader">
                    <Preloader />
                </div>
            );
        } else if (data.length > 0) {
            return (
                <div>
                    <div className="my-profile-feed__list">
                        {
                            data.map(item => (
                                <MyProfileFeedItem key={item._id} data={item} type={type} />
                            ))
                        }
                    </div>
                </div>
            );
        }

        return (
            <div className="my-profile-feed__empty-block">
                <p className="my-profile-feed__message">Здесь пока пусто</p>
            </div>
        );
    };

    render() {
        return (
            <div>
                <MyProfileFeedFilter items={this.props.filterItems} />
                {this.renderFeed()}
            </div>
        );
    }
}

export default MyProfileFeed;
