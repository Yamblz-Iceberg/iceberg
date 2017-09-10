export const fetchSavedCollections = (token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/bookmarks/savedCollections/', { headers })
        .then(res => res.json());
};

export const fetchMyCollections = (token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/bookmarks/createdCollections/', { headers })
        .then(res => res.json());
};

export const fetchMyLinks = (token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/bookmarks/addedLinks/', { headers })
        .then(res => res.json());
};

export const fetchSavedLinks = (token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/bookmarks/savedLinks/', { headers })
        .then(res => res.json());
};
