import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../../../blocks';

import './link-preview-footer.scss';

class LinkPreviewFooter extends Component {
    handleLike= () => {
        alert('Like bled!');
    }
    render() {
        const { likes, savedTimesCount } = this.props.link;
        return (<footer className="link-preview-footer">
            <div className="link-preview-footer__block" onClick={this.handleLike}>
                <Icon iconName={'like-big'} iconColor={'#a7a7a7'} />
                <span>{likes}</span>
            </div>
            <div className="link-preview-footer__block">
                <Icon iconName={'save-big'} iconColor={'#a7a7a7'} />
                <span>{savedTimesCount}</span>
            </div>
        </footer>);
    }
}

LinkPreviewFooter.propTypes = {
    link: PropTypes.object.isRequired,
};

export default LinkPreviewFooter;
