import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LinkPreviewHeader from './header/link-preview-header';
import LinkPreviewFooter from './footer/link-preview-footer';

import './link-preview.scss';

class LinkPreview extends Component {
    onElementClick = e => (e);
    render() {
        const { url } = this.props.link;
        return (<div className="link-preview-wrap">
            <LinkPreviewHeader />
            <div className="link-preview">
                {url}
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
