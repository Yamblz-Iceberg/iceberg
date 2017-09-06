import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Icon, Avatar } from './../../blocks';
import { putToSavedLoader, delFromSavedLoader } from './../../reducers/collection.reducer';
import { changeSavedStatusOfCardById } from './../../reducers/feed.reducer';

import './card-footer.scss';

import { mainYellow } from './../../variables.scss';

class CardFooter extends Component {
    putToSaved = (e) => {
        this.props.putToSavedLoader(this.props.idCard, this.props.token);
        this.props.changeSavedStatusOfCardById(this.props.idCard, true);
        e.stopPropagation();
    }

    delFromSaved = (e) => {
        this.props.delFromSavedLoader(this.props.idCard, this.props.token);
        this.props.changeSavedStatusOfCardById(this.props.idCard, false);
        e.stopPropagation();
    }

    render() {
        const props = this.props;
        // console.log(props);
        return (<div className="card-footer">
            <div className="card-footer__user">
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
        </div>);
    }
}

CardFooter.propTypes = {
    idCard: PropTypes.string,
    avatarOptions: PropTypes.object.isRequired,
    userName: PropTypes.string.isRequired,
    linksCount: PropTypes.number.isRequired,
    savedTimesCount: PropTypes.number.isRequired,
    saved: PropTypes.bool,
    token: PropTypes.any.isRequired,
    putToSavedLoader: PropTypes.func.isRequired,
    delFromSavedLoader: PropTypes.func.isRequired,
    changeSavedStatusOfCardById: PropTypes.func.isRequired,
};

CardFooter.defaultProps = {
    idCard: null,
    saved: null,
};

export default connect(state => ({
    collection: state.collection,
    token: state.authorization.access_token,
}),
{ putToSavedLoader, delFromSavedLoader, changeSavedStatusOfCardById })(CardFooter);
