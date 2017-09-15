import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../../../blocks';

import './link-preview__footer.scss';

class LinkPreviewFooter extends Component {
    static propTypes = {
        link: PropTypes.object.isRequired,
    };

    handleLike= () => {}

    render() {
        const { likes, savedTimesCount } = this.props.link;
        return (
            <footer className="link-preview__footer">
                <div className="link-preview__footer-block" onClick={this.handleLike}>
                    <Icon iconName={'like-big'} iconColor={'#a7a7a7'} />
                    <span>{likes}</span>
                </div>
                <div className="link-preview__footer-block">
                    <Icon iconName={'save-big'} iconColor={'#a7a7a7'} />
                    <span>{savedTimesCount}</span>
                </div>
            </footer>
        );
    }
}

export default LinkPreviewFooter;
