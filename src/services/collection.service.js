export const fetchCollection = (collectionId, token) => {
    const headers = new Headers({
        Authorization: token,
    });

    return fetch(`https://iceberg-project.herokuapp.com/collections/${collectionId}`, { headers })
        .then(res => res.json());
};

export const putCollectionToSaved = (id, token) => {
    const headers = new Headers({
        Authorization: token,
    });

    return fetch(`https://iceberg-project.herokuapp.com/users/bookmarks/collections/${id}`, {
        headers,
        method: 'put',
    }).then(res => res.json());
};

export const delCollectionFromSaved = (id, token) => {
    const headers = new Headers({
        Authorization: token,
    });

    return fetch(`https://iceberg-project.herokuapp.com/users/bookmarks/collections/${id}`, {
        headers,
        method: 'delete',
    }).then(res => res.json());
};
