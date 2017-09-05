import React from 'react';
import PropTypes from 'prop-types';

import './authorization__modal.scss';

const AuthorizationModal = (props) => {
    const redirectURI = 'https://iceberg-project.herokuapp.com/register/yandex/callback';
    const clientId = 'android';
    const clientSecret = 'SomeRandomCharsAndNumbers';
    const uniqueId = '43978157-ee67-490b-90fa-9eda5a28dc25';
    const yandexAppId = 'de408bbe9e2e47acb701ed948c40f60e';
    return (<div className={`authorization__modal ${props.show ? 'authorization__modal--show' : ''}`}><iframe
        title="ya"
        src={`https://oauth.yandex.ru/authorize?response_type=code&redirect_uri=${redirectURI}&state=${clientId},${clientSecret},${uniqueId}&client_id=${yandexAppId}`}
    /></div>);
};

AuthorizationModal.propTypes = {
    show: PropTypes.bool.isRequired,
};

export default AuthorizationModal;
