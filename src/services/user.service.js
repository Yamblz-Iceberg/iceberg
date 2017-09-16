import { fetchConstructor } from './../utils/shared-functions';

export const fetchUser = (token) => {
    const request = 'users/';
    return fetchConstructor(token, request).then(res => res.json());
};
