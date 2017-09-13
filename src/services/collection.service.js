export const getCollectionFetch = (collectionId, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/collections/${collectionId}`, { headers })
        .then(res => res.json());
};

export const removeCollectionFetch = (id, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/users/bookmarks/createdCollections/${id}`, {
        headers,
        method: 'delete',
    });
};

export const setCollectionAsSavedFetch = (id, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/users/bookmarks/savedCollections/${id}`, {
        headers,
        method: 'put',
    });
};

export const deleteCollectionFromSavedFetch = (id, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/users/bookmarks/savedCollections/${id}`, {
        headers,
        method: 'delete',
    });
};
