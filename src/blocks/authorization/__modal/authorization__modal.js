import React from 'react';
import PropTypes from 'prop-types';

import './authorization__modal.scss';

const AuthorizationModal = props => (
    <div className={`authorization__modal ${props.show ? 'authorization__modal--show' : ''}`}>
        {props.show
            ? <iframe title="logInIframe" className="authorization__iframe" src={props.src} />
            : null
        }
    </div>
);

AuthorizationModal.propTypes = {
    show: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
};

export default AuthorizationModal;
