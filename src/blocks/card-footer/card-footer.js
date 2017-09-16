import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Icon, Avatar } from './../../blocks';

import './card-footer.scss';
import { mainYellow } from './../../variables.scss';

/*
Компонент нижней части карточки с информацией о пользователе,
иконкой с индикацией количества ссылок, а также кнопкой "Подписаться"
 */
class CardFooter extends Component {
    static propTypes = {
        idCard: PropTypes.string,
        userId: PropTypes.string,
        avatarOptions: PropTypes.object.isRequired,
        userName: PropTypes.string.isRequired,
        linksCount: PropTypes.number,
        savedTimesCount: PropTypes.number,
        saved: PropTypes.bool,
        history: PropTypes.object.isRequired,
        isCreatingCard: PropTypes.bool,
        userData: PropTypes.object.isRequired,
        delFromSaved: PropTypes.func,
        putToSaved: PropTypes.func,
    };

    static defaultProps = {
        idCard: null,
        saved: null,
        userId: null,
        isCreatingCard: false,
        delFromSaved: null,
        putToSaved: null,
        linksCount: 0,
        savedTimesCount: 0,
    };

    goToUserProfile = (e, id) => {
        e.stopPropagation();
        if (!this.props.isCreatingCard) {
            if (this.props.userId === this.props.userData.userId) {
                this.props.history.push('/profile');
            } else {
                this.props.history.push(`/user/${id}`);
            }
        }
    };

    toogleSavedStatus = (e) => {
        e.stopPropagation();
        if (this.props.idCard) {
            if (this.props.saved === true) {
                this.props.delFromSaved();
            } else {
                this.props.putToSaved();
            }
        }
    };

    render() {
        const props = this.props;
        return (
            <div className="card-footer">
                <div className="card-footer__user" onClick={(e) => { this.goToUserProfile(e, props.userId); }}>
                    <Avatar {...props.avatarOptions} />
                    <span className="card-footer__user-name">{props.userName}</span>
                </div>

                <div className="card-footer__actions">
                    <div className="card-footer__link-action">
                        <Icon iconName={'link'} iconColor={'#fff'} />
                        <span>{props.linksCount}</span>
                    </div>
                    {
                        props.saved && <div className="card-footer__save-action" onClick={(e) => { this.toogleSavedStatus(e); }}>
                            <Icon iconName={'save-small'} iconColor={mainYellow} />
                            <span>{props.savedTimesCount}</span>
                        </div>
                    }
                    {
                        !props.saved && <div className="card-footer__save-action" onClick={(e) => { this.toogleSavedStatus(e); }}>
                            <Icon iconName={'save-big'} iconColor={'#fff'} />
                            <span>{props.savedTimesCount}</span>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    userData: state.user.data,
}),
)(withRouter(CardFooter));
