import { fetchConstructor } from './../utils/shared-functions';

export const fetchFeed = (queryParam, token) => {
    const request = `feed?sort=${queryParam}`;
    return fetchConstructor(token, request).then(res => res.json());
};
