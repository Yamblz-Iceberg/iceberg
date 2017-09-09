export const putTags = (tags, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    });

    return fetch('https://iceberg-project.herokuapp.com/tags/personal/', {
        method: 'put',
        body: JSON.stringify({ tags }),
        headers,
    });
};
