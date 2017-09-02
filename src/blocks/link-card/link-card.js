import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Avatar } from '../../blocks';

import './link-card.scss';
import variables from './../../variables.scss';

const LinkCard = ({ data, button, showFooter }) => {
    const cardStyles = {
        backgroundColor: variables.blue,
        backgroundImage: `url('${data.photo}')`,
    };
    const avatarOptions = {
        size: '25',
        iconColor: '#fff',
        photo: data.userAdded.photo,
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
            <img src={data.favicon} className="link-card__favicon" alt="link_ico" />
            {
                data.comment && data.comment.length ?
                    <blockquote className="link-card__comment">
                        <p>{data.comment}</p>
                    </blockquote>
                    : null
            }
        </div>
        { button }
        {
            showFooter === true ?
                <div className="link-card__footer">
                    <div className="link-card__block">
                        <Icon iconName={'like-big'} iconColor={'#fff'} />
                        <span>{data.likes}</span>
                    </div>
                    <div className="link-card__block">
                        <Icon iconName={'save-big'} iconColor={'#fff'} />
                        <span>{data.savedTimesCount}</span>
                    </div>
                </div>
                : null
        }

        <div className="link-card__overlay" />
    </div>);
};

LinkCard.propTypes = {
    data: PropTypes.object.isRequired,
    button: PropTypes.any,
    showFooter: PropTypes.bool,
};

LinkCard.defaultProps = {
    button: null,
    showFooter: true,
};

export default LinkCard;
