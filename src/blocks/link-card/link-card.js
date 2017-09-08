import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Icon, Avatar } from '../../blocks';
import { putToLikedLoader, delFromLikedLoader, changeLikedStatusById } from './../../reducers/collection.reducer';

import './link-card.scss';
import variables from './../../variables.scss';

class LinkCard extends Component {
    componentWillReceiveProps() {
        // if (this.data.likes !== props.data.likes) {
        // }
        console.log('like!');
    }

    putToLiked = (e) => {
        this.props.changeLikedStatusById(this.props.data._id, true);
        // this.props.putToLikedLoader(this.props.data._id, this.props.token);
        e.stopPropagation();
    }

    delFromLiked = (e) => {
        this.props.changeLikedStatusById(this.props.data._id, false);
        // this.props.delFromLikedLoader(this.props.data._id, this.props.token);
        e.stopPropagation();
    }

    render() {
        const { data, button, isTransparent, editIcon } = this.props;
        console.log('likes', data.likes);
        const cardStyles = {
            backgroundColor: variables.blue,
            backgroundImage: `url('${data.photo}')`,
        };
        const avatarOptions = {
            size: '25',
            iconColor: '#fff',
            photo: data.userAdded.photo,
        };

        const handleOnErrorFavicon = (e) => {
            e.target.style.display = 'none';
        };

        return (<div className="link-card" style={cardStyles}>
            <div className="link-card__header">
                <div className="link-card__user">
                    <Avatar {...avatarOptions} />
                    <div className="link-card__user-info">
                        <p className="link-card__user-name">{data.userAdded.firstName}</p>
                        <p className="link-card__user-rating">{data.userAdded.rating}</p>
                    </div>
                </div>
                <div className="link-card__context-menu">
                    <Icon iconName={'more-vert'} iconWidth={'22'} iconHeight={'14'} iconColor={'#fff'} />
                </div>
            </div>

            <div className="link-card__body">
                <h3 className="link-card__title">{data.name}</h3>
                <img src={data.favicon} onError={handleOnErrorFavicon} className="link-card__favicon" alt="link_ico" />
                {
                    data.description && data.description.length > 0 ?
                        <blockquote className="link-card__comment">
                            <p>
                                {data.description}
                                <span className="link-card__comment-edit">{editIcon}</span>
                            </p>
                        </blockquote>
                        : null
                }
            </div>
            { button }
            {
                <div className={isTransparent ? 'link-card__footer link-card__footer--transparent' : 'link-card__footer'}>
                    {
                        data.liked && <div className="link-card__block" onClick={this.delFromLiked}>
                            <Icon iconName={'like-big'} iconColor={variables.mainYellow} />
                            <span>{data.likes}</span>
                        </div>
                    }
                    <span>{data.likes}</span>
                    {
                        !data.liked && <div className="link-card__block" onClick={this.putToLiked}>
                            <Icon iconName={'like-big'} iconColor={'#fff'} />
                            <span>{data.likes}</span>
                        </div>
                    }
                    <div className="link-card__block">
                        <Icon iconName={'save-big'} iconColor={'#fff'} />
                        <span>{data.savedTimesCount}</span>
                    </div>
                </div>
            }

            <div className="link-card__overlay" />
        </div>);
    }
}

LinkCard.propTypes = {
    data: PropTypes.object.isRequired,
    button: PropTypes.any,
    isTransparent: PropTypes.bool,
    editIcon: PropTypes.object,
    delFromLikedLoader: PropTypes.func.isRequired,
    putToLikedLoader: PropTypes.func.isRequired,
    token: PropTypes.any.isRequired,
    changeLikedStatusById: PropTypes.func.isRequired,
};

LinkCard.defaultProps = {
    button: null,
    editIcon: null,
    isTransparent: false,
};

export default connect(state => ({
    token: state.authorization.access_token,
}), { putToLikedLoader, delFromLikedLoader, changeLikedStatusById })(LinkCard);
