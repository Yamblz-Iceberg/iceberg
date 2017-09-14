import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Icon, Avatar, ContextMenu } from '../../blocks';
import { changeStatusLikeOfLink, changeStatusSavedOfLink, deleteLinkFromCollection } from './../../reducers/collection.reducer';
import { removeLink } from './../../reducers/link.reducer';

import { showErrorModal } from './../../reducers/modal.reducer';
import { setLinkAsOpened } from './../../reducers/link.reducer';
import { changeOpenStatusOfLinkById } from './../../reducers/collection.reducer';

import './link-card.scss';
import variables from './../../variables.scss';

/*
Компонент карточки ссылки. Отображает пользователя, который добавил ссылку,
заголовок ссылки, фавиконку (если ссылка на фавиконку битая, то выводиться она
не будет), футер с дополнительной информацией, опциональную кнопку добавления
комментария (если компонент используется при создании ссылки).
*/
class LinkCard extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        button: PropTypes.any,
        isTransparent: PropTypes.bool,
        editIcon: PropTypes.object,
        changeStatusLikeOfLink: PropTypes.func.isRequired,
        changeStatusSavedOfLink: PropTypes.func.isRequired,
        token: PropTypes.any.isRequired,
        history: PropTypes.any.isRequired,
        userData: PropTypes.object.isRequired,
        removeLink: PropTypes.func.isRequired,
        showErrorModal: PropTypes.func.isRequired,
        setLinkAsOpened: PropTypes.func.isRequired,
        changeOpenStatusOfLinkById: PropTypes.func.isRequired,
        deleteLinkFromCollection: PropTypes.func.isRequired,
        enableOpenLink: PropTypes.bool,
    };

    static defaultProps = {
        data: {},
        button: null,
        editIcon: null,
        isTransparent: false,
        enableOpenLink: true,
    };

    openLink(href, id) {
        if (this.props.enableOpenLink) {
            if (typeof window.cordova !== 'undefined') {
                window.SafariViewController.isAvailable((available) => {
                    if (available) {
                        window.SafariViewController.show({
                            url: href,
                            hidden: false,
                            animated: false,
                            transition: 'curl',
                            enterReaderModeIfAvailable: false,
                            tintColor: '#fff',
                            barColor: '#000',
                            controlTintColor: '#ffffff',
                        },
                        // success
                        () => {},
                        // error
                        () => {
                            this.props.showErrorModal({
                                title: 'Упс!',
                                text: 'Такая ссылка не существует.',
                                buttonText: 'Понятно',
                            });
                        });
                    } else {
                        window.open(href);
                    }
                });
            } else {
                window.open(href);
            }
            this.props.setLinkAsOpened(id, this.props.token);
            this.props.changeOpenStatusOfLinkById(id);
        }
    }

    putToLiked = (e) => {
        // Проверяем, что пользователь авторизован
        if (typeof this.props.userData.accType !== 'undefined' && this.props.userData.accType !== 'demo') {
            this.props.changeStatusLikeOfLink(this.props.data._id, true, this.props.token);
            e.stopPropagation();
        } else {
            // Перенаправляем на авторизацию, если пользователь не авторизован
            localStorage.setItem('returnToAfterAuth', this.props.history.location.pathname);
            this.props.history.push('/authorization');
        }
    };

    delFromLiked = (e) => {
        this.props.changeStatusLikeOfLink(this.props.data._id, false, this.props.token);
        e.stopPropagation();
    };

    putToSaved = (e) => {
        // Проверяем, что пользователь авторизован
        if (typeof this.props.userData.accType !== 'undefined' && this.props.userData.accType !== 'demo') {
            this.props.changeStatusSavedOfLink(this.props.data._id, true, this.props.token);
            e.stopPropagation();
        } else {
            // Перенаправляем на авторизацию, если пользователь не авторизован
            localStorage.setItem('returnToAfterAuth', this.props.history.location.pathname);
            this.props.history.push('/authorization');
        }
    };

    delFromSaved = (e) => {
        this.props.changeStatusSavedOfLink(this.props.data._id, false, this.props.token);
        e.stopPropagation();
    };

    goToUserProfile = (e, id) => {
        this.props.history.push(`/user/${id}`);
        e.stopPropagation();
    };

    isAuthor = () => this.props.data.userAdded.userId === this.props.userData.userId;

    removeLink = (id) => {
        this.props.deleteLinkFromCollection(id);
        this.props.removeLink(id, this.props.token);
    };

    render() {
        const { data, button, isTransparent, editIcon } = this.props;
        const cardStyles = {
            backgroundColor: variables.blue,
            backgroundImage: `url('${data.photo}')`,
        };
        // контекстное меню для карточки ссылки
        const contextMenuItems = [
            {
                title: 'Удалить ссылку',
                id: 0,
                onClick: () => { this.removeLink(this.props.data._id); },
                icon: <Icon iconName={'close'} iconColor={'#777'} />,
            },
        ];

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
                    { this.isAuthor() && !isTransparent &&
                        <ContextMenu iconColor={'#fff'} items={contextMenuItems} /> }
                </div>
            </div>

            <div className="link-card__body" onClick={e => this.openLink(data.url, data._id, e)}>
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
    userData: state.user.data,
}), {
    changeStatusLikeOfLink,
    changeStatusSavedOfLink,
    removeLink,
    showErrorModal,
    setLinkAsOpened,
    changeOpenStatusOfLinkById,
    deleteLinkFromCollection,
})(withRouter(LinkCard));
