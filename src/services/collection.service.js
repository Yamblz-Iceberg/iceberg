export const getCollectionFetch = (collectionId, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/collections/${collectionId}`, { headers })
        .then(res => res.json());
};

export const setCollectionAsSavedFetch = (id, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/users/bookmarks/savedCollections/${id}`, {
        headers,
        method: 'put',
    }).then(res => res.json());
};

export const deleteCollectionFromSavedFetch = (id, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/users/bookmarks/savedCollections/${id}`, {
        headers,
        method: 'delete',
    }).then(res => res.json());
};
