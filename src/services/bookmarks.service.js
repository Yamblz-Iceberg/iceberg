export const fetchSavedCollections = (token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/bookmarks/collections/', { headers })
        .then(res => res.json());
};

export const fetchMyCollections = (token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/bookmarks/myCollections/', { headers })
        .then(res => res.json());
};

export const fetchMyLinks = (token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/bookmarks/myLinks/', { headers })
        .then(res => res.json());
};

export const fetchSavedLinks = (token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/bookmarks/links/', { headers })
        .then(res => res.json());
};
