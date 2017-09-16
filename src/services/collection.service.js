import { fetchConstructor } from './../utils/shared-functions';

export const getCollectionFetch = (collectionId, token) => {
    const request = `collections/${collectionId}`;
    return fetchConstructor(token, request).then(res => res.json());
};

export const removeCollectionFetch = (id, token) => {
    const request = `users/bookmarks/createdCollections/${id}`;
    return fetchConstructor(token, request, 'delete');
};

export const setCollectionAsSavedFetch = (id, token) => {
    const request = `users/bookmarks/savedCollections/${id}`;
    return fetchConstructor(token, request, 'put');
};

export const deleteCollectionFromSavedFetch = (id, token) => {
    const request = `users/bookmarks/savedCollections/${id}`;
    return fetchConstructor(token, request, 'delete');
};
