import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Avatar } from './../../blocks';

import './card-footer.scss';

const CardFooter = props => (
    <div className="card-footer">
        <div className="card-footer__user">
            <Avatar {...props.avatarOptions} />
            <span className="card-footer__user-name">{props.userName}</span>
        </div>

        <div className="card-footer__actions">
            <div className="card-footer__link-action">
                <Icon iconName={'link'} iconColor={'#fff'} />
                <span>{props.linksCount}</span>
            </div>
            <div className="card-footer__save-action">
                <Icon iconName={'save-big'} iconColor={'#fff'} />
                <span>{props.savedTimesCount}</span>
            </div>
        </div>
    </div>
);

CardFooter.propTypes = {
    avatarOptions: PropTypes.object.isRequired,
    userName: PropTypes.string.isRequired,
    linksCount: PropTypes.number.isRequired,
    savedTimesCount: PropTypes.number.isRequired,
};

export default CardFooter;
