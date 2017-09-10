import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Icon, Avatar } from '../../blocks';
import { changeLikeOfLinkLoader, changeSavedOfLinkLoader } from './../../reducers/collection.reducer';

import './link-card.scss';
import variables from './../../variables.scss';

class LinkCard extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        button: PropTypes.any,
        isTransparent: PropTypes.bool,
        editIcon: PropTypes.object,
        changeLikeOfLinkLoader: PropTypes.func.isRequired,
        changeSavedOfLinkLoader: PropTypes.func.isRequired,
        token: PropTypes.any.isRequired,
        history: PropTypes.any.isRequired,
    };

    static defaultProps = {
        data: {},
        button: null,
        editIcon: null,
        isTransparent: false,
    };

    putToLiked = (e) => {
        this.props.changeLikeOfLinkLoader(this.props.data._id, true, this.props.token);
        e.stopPropagation();
    }

    delFromLiked = (e) => {
        this.props.changeLikeOfLinkLoader(this.props.data._id, false, this.props.token);
        e.stopPropagation();
    }

    putToSaved = (e) => {
        this.props.changeSavedOfLinkLoader(this.props.data._id, true, this.props.token);
        e.stopPropagation();
    }

    delFromSaved = (e) => {
        this.props.changeSavedOfLinkLoader(this.props.data._id, false, this.props.token);
        e.stopPropagation();
    }

    goToUserProfile = (e, id) => {
        this.props.history.push(`/user/${id}`);
        e.stopPropagation();
    }

    render() {
        const { data, button, isTransparent, editIcon } = this.props;
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

        const userName = `${data.userAdded.firstName} ${data.userAdded.lastName}`;

        return (<div className="link-card" style={cardStyles}>
            <div className="link-card__header">
                <div className="link-card__user" onClick={(e) => { this.goToUserProfile(e, data.userAdded.userId); }}>
                    <Avatar {...avatarOptions} />
                    <div className="link-card__user-info">
                        <p className="link-card__user-name">{userName}</p>
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
                    {/* лайки */}
                    {
                        data.liked && <div className="link-card__block" onClick={this.delFromLiked}>
                            <Icon iconName={'like-filled'} iconColor={variables.mainYellow} />
                            <span>{data.likes}</span>
                        </div>
                    }
                    {
                        !data.liked && <div className="link-card__block" onClick={this.putToLiked}>
                            <Icon iconName={'like-big'} iconColor={'#fff'} />
                            <span>{data.likes}</span>
                        </div>
                    }
                    {/* сохранение */}
                    {
                        data.saved && <div className="link-card__block" onClick={this.delFromSaved}>
                            <Icon iconName={'save-small'} iconColor={variables.mainYellow} />
                            <span>{data.savedTimesCount}</span>
                        </div>
                    }
                    {
                        !data.saved && <div className="link-card__block" onClick={this.putToSaved}>
                            <Icon iconName={'save-big'} iconColor={'#fff'} />
                            <span>{data.savedTimesCount}</span>
                        </div>
                    }
                </div>
            }
            <div className="link-card__overlay" />
        </div>);
    }
}

export default connect(state => ({
    token: state.authorization.access_token,
}), { changeLikeOfLinkLoader, changeSavedOfLinkLoader })(withRouter(LinkCard));
