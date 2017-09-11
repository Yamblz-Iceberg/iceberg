export const postLink = (data, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    });

    return fetch('https://iceberg-project.herokuapp.com/links/', {
        method: 'post',
        body: JSON.stringify(data),
        headers,
    }).then(res => res.json());
};

export const removeLinkFetch = (id, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/users/bookmarks/addedLinks/${id}`, {
        method: 'delete',
        headers,
    }).then(res => res.json());
};

export const addLinkToCollectionFetch = (collectionId, linkId, token, description) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    });

    return fetch(`https://iceberg-project.herokuapp.com/collections/addLink/${collectionId}/${linkId}`, {
        method: 'post',
        body: JSON.stringify({ description }),
        headers,
    });
};

export const setLinkAsOpenedFetch = (id, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/links/open/${id}`, {
        headers,
        method: 'put',
    });
};

export const changeStatusLikeOfLinkFetch = (id, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/links/like/${id}`, {
        headers,
        method: 'put',
    });
};

export const setLinkAsSavedFetch = (id, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/users/bookmarks/savedLinks/${id}`, {
        headers,
        method: 'put',
    });
};

export const deleteLinkFromeSavedFetch = (id, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/users/bookmarks/savedLinks/${id}`, {
        headers,
        method: 'delete',
    });
};
