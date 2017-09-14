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
        linksCount: PropTypes.number.isRequired,
        savedTimesCount: PropTypes.number.isRequired,
        saved: PropTypes.bool,
        history: PropTypes.object.isRequired,
        isCreatingCard: PropTypes.bool,
    };

    static defaultProps = {
        idCard: null,
        saved: null,
        userId: null,
        isCreatingCard: false,
    };

    goToUserProfile = (e, id) => {
        if (!this.props.isCreatingCard) {
            this.props.history.push(`/user/${id}`);
        }
        e.stopPropagation();
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
                        props.saved && <div className="card-footer__save-action" onClick={props.idCard ? props.delFromSaved : null}>
                            <Icon iconName={'save-small'} iconColor={mainYellow} />
                            <span>{props.savedTimesCount}</span>
                        </div>
                    }
                    {
                        !props.saved && <div className="card-footer__save-action" onClick={props.idCard ? props.putToSaved : null}>
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
    collection: state.collection,
}),
)(withRouter(CardFooter));
