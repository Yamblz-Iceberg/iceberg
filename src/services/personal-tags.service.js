import { fetchConstructor } from './../utils/shared-functions';

export const putTags = (tags, token) => {
    const otherHeaders = [
        {
            name: 'Content-Type',
            value: 'application/json',
        },
    ];
    const body = JSON.stringify({ tags });
    const request = 'tags/personal/';
    return fetchConstructor(token, request, 'put', body, otherHeaders);
};
