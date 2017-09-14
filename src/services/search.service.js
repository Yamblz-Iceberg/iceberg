import { fetchConstructor } from './../utils/shared-functions';

export const fetchSearchResult = (searchText, token) => {
    const request = `feed?search=${encodeURIComponent(searchText)}`;
    return fetchConstructor(token, request).then(res => res.json());
};
