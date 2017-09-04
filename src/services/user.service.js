export const fetchUser = (token) => {
    const headers = new Headers({
        Authorization: token,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/', { headers })
        .then(res => res.json());
};

export const fetchSavedCollections = (token) => {
    const headers = new Headers({
        Authorization: token,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/bookmarks/collections/', { headers })
        .then(res => res.json());
};

export const fetchSavedLinks = (token) => {
    const headers = new Headers({
        Authorization: token,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/bookmarks/links/', { headers })
        .then(res => res.json());
};
