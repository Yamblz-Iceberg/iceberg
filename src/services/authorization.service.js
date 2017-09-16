import { CLIENT_ID, CLIENT_SECRET } from '../config';
import { fetchConstructor } from './../utils/shared-functions';

const encodedAuth = window.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

export const postRegisterDemoUser = (userId, password, firstName, lastName) => {
    const request = 'register/demo';
    const body = JSON.stringify({ userId, password, firstName, lastName });
    const otherHeaders = [
        {
            name: 'Content-Type',
            value: 'application/json',
        },
    ];

    return fetchConstructor(encodedAuth, request, 'post', body, otherHeaders, 'Basic').then(res => res.json());
};

export const postRefreshToken = (refreshToken) => {
    const body = `grant_type=refresh_token&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&refresh_token=${refreshToken}`;
    const request = 'oauth/token';

    return fetchConstructor('', request, 'post', body).then(res => res.json());
};

export const putLogOut = (accessToken, refreshToken) => {
    const otherHeaders = [
        {
            name: 'Content-Type',
            value: 'application/json',
        },
    ];
    const body = JSON.stringify({ accessToken, refreshToken });
    const request = 'register/logout';

    return fetchConstructor(encodedAuth, request, 'put', body, otherHeaders, 'Basic').then(res => res.json());
};
