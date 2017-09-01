import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Icon } from '../../../blocks';

import './link-preview-header.scss';

class LinkPreviewHeader extends Component {
    handleGoBack = () => {
        this.props.closeUrl();
        this.props.history.goBack();
    }
    render() {
        return (<header className="link-preview-header">
            <div className="link-preview-header__container">
                <div className="link-preview-header__block" onClick={this.handleGoBack}>
                    <Icon iconName={'arrow-back'} iconColor="#fff" />
                </div>
                <div className="link-preview-header__block" onClick={this.handleGoBack}>
                    <Icon iconName={'more-vert'} iconColor="#fff" />
                </div>
            </div>
        </header>);
    }
}

LinkPreviewHeader.propTypes = {
    history: PropTypes.any.isRequired,
    closeUrl: PropTypes.func.isRequired,
};

export default (withRouter(LinkPreviewHeader));
