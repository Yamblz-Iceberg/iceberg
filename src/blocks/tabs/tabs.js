import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './tabs.scss';

class Tabs extends Component {
    constructor() {
        super();
        this.state = {
            underliningStyles: {
                left: 0,
            },
        };
    }

    setUnderliningPosition(position) {
        this.setState({
            ...this.state.underliningStyles,
            underliningStyles: position,
        });
    }

    goTo = (linkTo) => {
        this.props.history.replace(linkTo);
    }

    animateUnderline = () => {
        setTimeout(() => {
            const tabLinkActive = document.querySelector('.tab__link--active');
            this.setUnderliningPosition({ left: tabLinkActive.offsetLeft });
        }, 0);
    }

    render() {
        const { tabs, history } = this.props;

        return (
            <div className="tabs-container">
                <ul className="tabs__list">
                    <div className="tabs__underlining" style={this.state.underliningStyles} />
                    { tabs.length > 0 && tabs.map(tab => (
                        <li
                            className={`tabs__item
                                ${history.location.pathname === tab.linkTo
                            ? 'tabs__item--active'
                            : ''}
                            `}
                            key={tab.id}
                        >
                            <span
                                className="tabs__link"
                                onClick={() => this.goTo(tab.linkTo)}
                            >{tab.title}</span>
                        </li>))
                    }
                </ul>
            </div>
        );
    }
}

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })),
    history: PropTypes.object.isRequired,
};

Tabs.defaultProps = {
    tabs: [],
};

export default withRouter(Tabs);
