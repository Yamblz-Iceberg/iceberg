export const fetchTags = (token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch('https://iceberg-project.herokuapp.com/feed?only=tags&count=9', { headers })
        .then(res => res.json());
};

export const putTags = (tags, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    });

    return fetch('https://iceberg-project.herokuapp.com/tags/personal?firstLogin=true', {
        method: 'put',
        body: JSON.stringify({ tags }),
        headers,
    });
};
