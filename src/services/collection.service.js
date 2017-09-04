export const fetchCollection = (collectionId, token) => {
    const headers = new Headers({
        Authorization: token,
    });

    return fetch(`https://iceberg-project.herokuapp.com/collections/${collectionId}`, { headers })
        .then(res => res.json());
};
