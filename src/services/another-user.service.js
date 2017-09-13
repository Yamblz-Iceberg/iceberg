import { fetchConstructor } from './../utils/shared-functions';

export const fetchUser = (token, id) => {
    const request = `users/${id}`;

    return fetchConstructor(token, request).then(res => res.json());
};

export const getSavedCollectionsFetch = (token, id) => {
    const request = `users/bookmarks/createdCollections?userId=${id}`;

    return fetchConstructor(token, request).then(res => res.json());
};
