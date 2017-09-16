import { fetchConstructor } from './../utils/shared-functions';

export const postCollection = (data, token) => {
    const otherHeaders = [
        {
            name: 'Content-Type',
            value: 'application/json',
        },
    ];
    const body = JSON.stringify(data);
    const request = 'collections';

    return fetchConstructor(token, request, 'post', body, otherHeaders).then(res => res.json());
};

export const postHashtagToSaved = (name, token) => {
    const request = `tags/${name}`;
    return fetchConstructor(token, request, 'post').then(res => res.json());
};
