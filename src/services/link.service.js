export const postLink = (data, token) => {
    const headers = new Headers({
        Authorization: token,
        'Content-Type': 'application/json',
    });

    return fetch('https://iceberg-project.herokuapp.com/links/', {
        method: 'post',
        body: JSON.stringify(data),
        headers,
    }).then(res => res.json());
};

export const postLinkToCollection = (collectionId, linkId, token, comment) => {
    const headers = new Headers({
        Authorization: token,
        'Content-Type': 'application/json',
    });

    return fetch(`https://iceberg-project.herokuapp.com/collections/addLink/${collectionId}/${linkId}`, {
        method: 'post',
        body: JSON.stringify({ description: comment }),
        headers,
    });
};
