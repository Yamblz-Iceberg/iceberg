import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Icon, Avatar } from './../../blocks';
import { putToSavedLoader, delFromSavedLoader } from './../../reducers/collection.reducer';
import { changeSavedStatusOfCardById } from './../../reducers/feed.reducer';

import './card-footer.scss';

import { mainYellow } from './../../variables.scss';

class CardFooter extends Component {
    putToSaved = (e) => {
        if (typeof this.props.userData.accType !== 'undefined' && this.props.userData.accType !== 'demo') {
            this.props.putToSavedLoader(this.props.idCard, this.props.token);
            this.props.changeSavedStatusOfCardById(this.props.idCard, true);
            e.stopPropagation();
        } else {
            localStorage.setItem('returnToAfterAuth', this.props.history.location.pathname);
            this.props.history.push('/authorization');
        }
    };

    delFromSaved = (e) => {
        this.props.delFromSavedLoader(this.props.idCard, this.props.token);
        this.props.changeSavedStatusOfCardById(this.props.idCard, false);
        e.stopPropagation();
    };

    goToUserProfile = (e, id) => {
        this.props.history.push(`/user/${id}`);
        e.stopPropagation();
    }

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
                        props.saved && <div className="card-footer__save-action" onClick={this.props.idCard ? this.delFromSaved : null}>
                            <Icon iconName={'save-small'} iconColor={mainYellow} />
                            <span>{props.savedTimesCount}</span>
                        </div>
                    }
                    {
                        !props.saved && <div className="card-footer__save-action" onClick={this.props.idCard ? this.putToSaved : null}>
                            <Icon iconName={'save-big'} iconColor={'#fff'} />
                            <span>{props.savedTimesCount}</span>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

CardFooter.propTypes = {
    idCard: PropTypes.string,
    userId: PropTypes.string,
    avatarOptions: PropTypes.object.isRequired,
    userName: PropTypes.string.isRequired,
    linksCount: PropTypes.number.isRequired,
    savedTimesCount: PropTypes.number.isRequired,
    saved: PropTypes.bool,
    token: PropTypes.any.isRequired,
    putToSavedLoader: PropTypes.func.isRequired,
    delFromSavedLoader: PropTypes.func.isRequired,
    changeSavedStatusOfCardById: PropTypes.func.isRequired,
    userData: PropTypes.object.isRequired,
    history: PropTypes.any.isRequired,
};

CardFooter.defaultProps = {
    idCard: null,
    saved: null,
    userId: null,
};

export default connect(state => ({
    collection: state.collection,
    token: state.authorization.access_token,
    userData: state.user.data,
}),
{ putToSavedLoader, delFromSavedLoader, changeSavedStatusOfCardById },
)(withRouter(CardFooter));
