import { fetchConstructor } from './../utils/shared-functions';

export const getSavedCollectionsFetch = (token) => {
    const request = 'users/bookmarks/savedCollections/';

    return fetchConstructor(token, request).then(res => res.json());
};

export const getCreatedCollectionsFetch = (token) => {
    const request = 'users/bookmarks/createdCollections/';

    return fetchConstructor(token, request).then(res => res.json());
};

export const getAddedLinksFetch = (token) => {
    const request = 'users/bookmarks/addedLinks/';

    return fetchConstructor(token, request).then(res => res.json());
};

export const getSavedLinksFetch = (token, linkType) => {
    const request = `users/bookmarks/savedLinks?filter=${linkType}`;

    return fetchConstructor(token, request).then(res => res.json());
};
