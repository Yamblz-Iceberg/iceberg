export const fetchTags = (token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch('https://iceberg-project.herokuapp.com/feed?only=tags&count=9', { headers })
        .then(res => res.json());
};
