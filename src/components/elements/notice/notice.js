import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './notice.scss';

class Notice extends Component {
    constructor() {
        super();
        this.state = { destroy: false };
    }

    handleClick = () => {
        this.setState({
            destroy: true,
        });
    }

    render() {
        if (this.state.destroy) return null;

        const { left, top, text } = this.props;
        const noticeStyles = { top, left };

        return (
            <div
                className="notice"
                onClick={this.handleClick}
                role="button"
                tabIndex="0"
            >
                <div
                    className="notice__text-content"
                    style={noticeStyles}
                >{text}</div>
            </div>
        );
    }
}

Notice.defaultProps = {
    top: 0,
    left: 0,
};

Notice.propTypes = {
    top: PropTypes.number,
    left: PropTypes.number,
    text: PropTypes.string.isRequired,
};

export default Notice;
