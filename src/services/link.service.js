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

export const postLinkToCollection = (collectionId, linkId, token, description) => {
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

export const putLinkToLiked = (id, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/links/like/${id}`, {
        headers,
        method: 'put',
    }).then(res => res.json());
};

export const delLinkFromLiked = (id, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/links/like/${id}`, {
        headers,
        method: 'delete',
    }).then(res => res.json());
};
