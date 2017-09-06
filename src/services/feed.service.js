export const fetchFeed = (queryParam, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/feed?sort=${queryParam}`, { headers })
        .then(res => res.json());
};
