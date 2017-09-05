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

export const postHashtagToSaved = (data, token) => {
    const headers = new Headers({
        Authorization: token,
    });

    return fetch('https://iceberg-project.herokuapp.com/tags/', {
        headers,
        method: 'post',
    }).then(res => res.json());
};
