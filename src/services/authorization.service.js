import { CLIENT_ID, CLIENT_SECRET } from '../config';

const encodedAuth = window.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

export const postRegisterDemoUser = (userId, password) => {
    const headers = new Headers({
        Authorization: `Basic ${encodedAuth}`,
        'Content-Type': 'application/json',
    });

    return fetch('https://iceberg-project.herokuapp.com/register/demo', {
        method: 'post',
        body: JSON.stringify({ userId, password }),
        headers,
    }).then(res => res.json());
};

export const postRefreshToken = (refreshToken) => {
    const data = `grant_type=refresh_token&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&refresh_token=${refreshToken}`;
    return fetch('https://iceberg-project.herokuapp.com/oauth/token', {
        method: 'post',
        body: data,
    }).then(res => res.json());
};
