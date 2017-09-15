import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../blocks';

import './toggle-text.scss';

class ToggleText extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        component: PropTypes.object,
    };

    static defaultProps = {
        component: {},
    };

    constructor(props) {
        super(props);
        this.state = {
            showToggleIcon: false,
            showAllText: false,
            isText: true,
        };
    }

    componentDidMount() {
        if (this.props.text.length > 0
            && this.toggleTextWrapper.offsetHeight > this.toggleText.offsetHeight) {
            /* eslint-disable react/no-did-mount-set-state */
            this.setState({ showToggleIcon: true });
        }
    }

    componentWillReceiveProps() {
        this.setState({ text: this.props.text });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.text !== this.props.text
            && this.toggleTextWrapper.offsetHeight > this.toggleText.offsetHeight) {
            /* eslint-disable react/no-did-update-set-state */
            this.setState({ showToggleIcon: true });
        } else if (prevProps.text === '' && prevProps.text === this.props.text && this.state.isText) {
            /* eslint-disable react/no-did-update-set-state */
            this.setState({ ...this.state, showToggleIcon: false, isText: false });
        }
    }

    showAllText = () => {
        if (this.toggleTextWrapper.offsetHeight
            > this.toggleText.offsetHeight || this.state.showAllText === true) {
            this.setState({ showAllText: !this.state.showAllText });
        }
    };

    render() {
        return (
            <div
                className={`text-toggle ${this.state.showAllText === true ? 'text-toggle--show-all' : ''}`}
                onClick={() => this.showAllText()}
            >
                <div className={`text-toggle__container ${this.state.isText === false
                    ? 'text-toggle__container--no-text'
                    : ''}`}
                >
                    <div className="text-toggle__text" ref={(el) => { this.toggleText = el; }} >
                        <span
                            className="text-toggle__text-wrapper"
                            ref={(el) => { this.toggleTextWrapper = el; }}
                        >
                            { this.props.text }
                            { Object.keys(this.props.component).length > 0 ? this.props.component : '' }
                        </span>
                    </div>
                    <div className={this.state.showToggleIcon === true
                        ? 'text-toggle__icon '
                        : 'text-toggle__icon text-toggle__icon--hide'}
                    >
                        <Icon iconName={'arrow-more--popup'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ToggleText;
