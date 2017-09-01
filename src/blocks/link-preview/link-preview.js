import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LinkPreviewHeader from './header/link-preview-header';
import LinkPreviewFooter from './footer/link-preview-footer';

import './link-preview.scss';

class LinkPreview extends Component {
    onClickUrl = () => {
        const target = '_system';
        const options = '';
        window.cordova.InAppBrowser.open(this.props.link.url, target, options);
    }
    render() {
        const { url } = this.props.link;
        let template = <p>Ссылка: <span onClick={this.onClickUrl}>{url}</span></p>;
        if (window.cordova) {
            let inAppBrowserRef;
            const loadStartCallBack = () => {};
            const loadStopCallBack = () => {
                if (inAppBrowserRef !== undefined) {
                    inAppBrowserRef.show();
                }
            };
            const loadErrorCallBack = () => {
                const scriptErrorMesssage =
                    `alert("Бяда! Не удалось открыть ссылку '${url}'.")`;
                inAppBrowserRef.executeScript({ code: scriptErrorMesssage });
                inAppBrowserRef.close();
                inAppBrowserRef = undefined;
            };
            const show = (href) => {
                const target = '_blank';
                const options = 'location=yes,hidden=yes';
                inAppBrowserRef = window.cordova.InAppBrowser
                    .open(href, target, options);
                inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);
                inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);
                inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);
            };
            show(url);
        } else {
            template = (<p>Ссылка: <a href={url}>{url}</a></p>);
        }
        return (<div className="link-preview-wrap">
            <LinkPreviewHeader />
            <div className="link-preview">
                {template}
            </div>
            <LinkPreviewFooter link={this.props.link} />
        </div>);
    }
}

LinkPreview.propTypes = {
    link: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        link: state.link,
    };
}

export default connect(mapStateToProps)(LinkPreview);
