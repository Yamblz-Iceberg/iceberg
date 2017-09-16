import { fetchConstructor } from './../utils/shared-functions';

export const postLink = (data, token) => {
    const otherHeaders = [
        {
            name: 'Content-Type',
            value: 'application/json',
        },
    ];
    const body = JSON.stringify(data);
    const request = 'links/';
    return fetchConstructor(token, request, 'post', body, otherHeaders).then(res => res.json());
};

export const removeLinkFetch = (id, token) => {
    const request = `users/bookmarks/addedLinks/${id}`;
    return fetchConstructor(token, request, 'delete').then(res => res.json());
};

export const addLinkToCollectionFetch = (collectionId, linkId, token, description) => {
    const otherHeaders = [
        {
            name: 'Content-Type',
            value: 'application/json',
        },
    ];
    const body = JSON.stringify({ description });
    const request = `collections/addLink/${collectionId}/${linkId}`;
    return fetchConstructor(token, request, 'post', body, otherHeaders);
};

export const setLinkAsOpenedFetch = (id, token) => {
    const request = `links/open/${id}`;
    return fetchConstructor(token, request, 'put');
};

export const changeStatusLikeOfLinkFetch = (id, token) => {
    const request = `links/like/${id}`;
    return fetchConstructor(token, request, 'put');
};

export const setLinkAsSavedFetch = (id, token) => {
    const request = `users/bookmarks/savedLinks/${id}`;
    return fetchConstructor(token, request, 'put');
};

export const deleteLinkFromeSavedFetch = (id, token) => {
    const request = `users/bookmarks/savedLinks/${id}`;
    return fetchConstructor(token, request, 'delete').then(res => res.json());
};
