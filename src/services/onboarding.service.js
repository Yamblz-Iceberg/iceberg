import { fetchConstructor } from './../utils/shared-functions';

export const fetchTags = (token) => {
    const request = 'feed?only=tags&count=9';
    return fetchConstructor(token, request).then(res => res.json());
};

export const putTags = (tags, token) => {
    const otherHeaders = [
        {
            name: 'Content-Type',
            value: 'application/json',
        },
    ];
    const body = JSON.stringify({ tags });
    const request = 'tags/personal?firstLogin=true';
    return fetchConstructor(token, request, 'put', body, otherHeaders);
};
