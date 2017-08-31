import React from 'react';
import PropTypes from 'prop-types';
import TabItem from './item/tab-item';
import './tabs.scss';

const Tabs = ({ tabs }) => (
    <div className="tabs-container">
        <ul className="tabs__list">
            {
                tabs.map(tab => <TabItem key={tab.id} title={tab.title} linkTo={tab.linkTo} />)
            }
        </ul>
    </div>
);

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })),
};

Tabs.defaultProps = {
    tabs: [],
};

export default Tabs;
