import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './tabs.scss';

class Tabs extends Component {
    static propTypes = {
        tabs: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })),
        history: PropTypes.object.isRequired,
    }

    static defaultProps = {
        tabs: [],
    }

    componentDidMount() {
        this.animateUnderline();
    }

    componentDidUpdate() {
        this.animateUnderline();
    }

    refItemListActive = (listItem) => {
        this.activeListItem = listItem;
    }

    goTo = linkTo => () => {
        this.props.history.replace(linkTo);
    }

    animateUnderline = () => {
        if (typeof this.activeListItem !== 'undefined') {
            const {
                offsetLeft,
                offsetWidth,
            } = this.activeListItem;

            this.underline.style.cssText = `
                left:${offsetLeft}px;
                width:${offsetWidth}px;
            `;
        }
    }

    render() {
        const { tabs, history } = this.props;

        return (
            <div className="tabs-container">
                <ul className="tabs__list">
                    <div
                        className="tabs__underlining"
                        ref={(underline) => { this.underline = underline; }}
                    />
                    { tabs.length > 0 && tabs.map((tab) => {
                        const isItemActive = history.location.pathname === tab.linkTo;
                        const itemProps = {
                            className: `tab__item ${isItemActive ? 'tabs__item--active' : ''}`,
                            key: `${tab.id}`,
                            onClick: tab.onClick,
                            ref: isItemActive ? this.refItemListActive : null,
                        };

                        return (
                            <li {...itemProps}>
                                <span
                                    className="tabs__link"
                                    onClick={this.goTo(tab.linkTo)}
                                >{tab.title}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default withRouter(Tabs);
