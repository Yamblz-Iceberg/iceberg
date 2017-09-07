import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Avatar } from '../../blocks';

import './link-card.scss';
import variables from './../../variables.scss';

const LinkCard = ({ data, button, isTransparent, editIcon }) => {
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
                <div className="link-card__block">
                    <Icon iconName={'like-big'} iconColor={'#fff'} />
                    <span>{data.likes}</span>
                </div>
                <div className="link-card__block">
                    <Icon iconName={'save-big'} iconColor={'#fff'} />
                    <span>{data.savedTimesCount}</span>
                </div>
            </div>
        }

        <div className="link-card__overlay" />
    </div>);
};

LinkCard.propTypes = {
    data: PropTypes.object.isRequired,
    button: PropTypes.any,
    isTransparent: PropTypes.bool,
    editIcon: PropTypes.object,
};

LinkCard.defaultProps = {
    button: null,
    editIcon: null,
    isTransparent: false,
};

export default LinkCard;
