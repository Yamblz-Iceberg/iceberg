export const postCollection = (data, token) => {
    const headers = new Headers({
        Authorization: token,
        'Content-Type': 'application/json',
    });

    return fetch('https://iceberg-project.herokuapp.com/collections/', {
        method: 'post',
        body: JSON.stringify(data),
        headers,
    });
};
