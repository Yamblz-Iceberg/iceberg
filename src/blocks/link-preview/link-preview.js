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
            // let inAppBrowserRef;
            const openUrl = (href, readerMode) => {
                window.SafariViewController.isAvailable((available) => {
                    if (available) {
                        window.SafariViewController.show({
                            url: href,
                            hidden: false,
                            animated: false,
                            transition: 'curl',
                            enterReaderModeIfAvailable: readerMode,
                            tintColor: '#fff',
                            barColor: '#000',
                            controlTintColor: '#ffffff',
                        },
                        (result) => {
                            if (result.event === 'opened') {
                                console.log('opened');
                            } else if (result.event === 'loaded') {
                                console.log('loaded');
                            } else if (result.event === 'closed') {
                                console.log('closed');
                            }
                        },
                        (err) => {
                            console.log(err);
                        });
                    } else {
                        window.open(url, '_blank', 'location=yes');
                    }
                });
            };
            openUrl(url);
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
