import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Avatar } from '../../elements';

import './link-card.scss';
import variables from './../../../variables.scss';

const LinkCard = ({ data }) => {
    const cardStyles = {
        backgroundColor: variables.blue,
        backgroundImage: `url('${data.background}')`,
    };

    const avatarOptions = {
        size: '25',
        photo: data.avatar,
        iconColor: '#fff',
    };

    return (<a className="link-card" href={data.href} style={cardStyles}>
        <div className="link-card__header">
            <div className="link-card__user">
                <Avatar {...avatarOptions} />
                <div className="link-card__user-info">
                    <p className="link-card__user-name">{data.userName}</p>
                    <p className="link-card__user-rating">{data.userRating}</p>
                </div>
            </div>
            <div className="link-card__context-menu">
                <Icon iconName={'more-vert'} iconWidth={'22'} iconHeight={'14'} iconColor={'#fff'} />
            </div>
        </div>

        <div className="link-card__body">
            <h3 className="link-card__title">{data.title}</h3>
            <img src={data.favicon} className="link-card__favicon" alt="link_ico" />
            {
                data.comment && data.comment.length ?
                    <blockquote className="link-card__comment">
                        <p>{data.comment}</p>
                    </blockquote>
                    :
                    null
            }
        </div>

        <div className="link-card__footer">
            <div className="link-card__block">
                <Icon iconName={'like-big'} iconColor={'#fff'} />
                <span>{data.likesCount}</span>
            </div>
            <div className="link-card__block">
                <Icon iconName={'save-big'} iconColor={'#fff'} />
                <span>{data.savedCount}</span>
            </div>
        </div>
    </a>);
};

LinkCard.propTypes = {
    data: PropTypes.object.isRequired,
};

export default LinkCard;
