import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LinkPreviewHeader from './__header/link-preview__header';
import LinkPreviewFooter from './__footer/link-preview__footer';
import { showSafariViewController } from './../../utils/shared-functions';

import './link-preview.scss';

class LinkPreview extends Component {
    static propTypes = {
        link: PropTypes.object.isRequired,
    };

    onClickUrl = () => {
        const target = '_system';
        const options = '';
        window.cordova.InAppBrowser.open(this.props.link.url, target, options);
    }

    render() {
        const { url } = this.props.link;
        let template = <p>Ссылка: <span onClick={this.onClickUrl}>{url}</span></p>;

        if (typeof window.cordova !== 'undefined') {
            const openUrl = (href, readerMode) => {
                window.SafariViewController.isAvailable((available) => {
                    if (available) {
                        showSafariViewController(href, readerMode);
                    } else {
                        window.open(url, '_blank', 'location=yes');
                    }
                });
            };
            openUrl(url);
        } else {
            template = (<p>Ссылка: <a href={url}>{url}</a></p>);
        }

        return (
            <div className="link-preview-wrap">
                <LinkPreviewHeader />
                <div className="link-preview">
                    {template}
                </div>
                <LinkPreviewFooter link={this.props.link} />
            </div>
        );
    }
}

export default connect(
    state => ({
        link: state.link,
    }),
)(LinkPreview);
