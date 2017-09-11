export const fetchUser = (token, id) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/users/${id}`, { headers })
        .then(res => res.json());
};

export const getSavedCollectionsFetch = (token, id) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/users/bookmarks/createdCollections?userId=${id}`, { headers })
        .then(res => res.json());
};
