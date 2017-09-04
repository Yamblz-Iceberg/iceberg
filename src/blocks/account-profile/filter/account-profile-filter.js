import React from 'react';
import { Icon, Dropdown } from '../../../blocks';

import './account-profile-filter.scss';

const ProfileFilter = () => {
    const items = [
        {
            id: 0,
            title: 'Созданные мной',
        },
        {
            id: 1,
            title: 'Сохраненные',
        },
    ];
    return (<div className="profile-filter">
        <div className="profile-filter__block">
            <Icon iconName="settings" iconColor="#000" iconHeight="20" iconWidth="20" />
        </div>
        <div className="profile-filter__block">
            <Dropdown items={items} onSelect={(item) => { console.log(item); }} />
        </div>
        <div className="profile-filter__block">
            <Icon
                className="home-filter__icon-settings"
                iconName="search"
                iconColor="#000"
                iconHeight="24"
                iconWidth="24"
            />
        </div>
    </div>);
};

export default ProfileFilter;
