export const fetchSavedCollections = (token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/bookmarks/savedCollections/', { headers })
        .then(res => res.json());
};

export const fetchCreatedCollections = (token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/bookmarks/createdCollections/', { headers })
        .then(res => res.json());
};

export const fetchAddedLinks = (token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/bookmarks/addedLinks/', { headers })
        .then(res => res.json());
};

export const fetchSavedLinks = (token, linkType) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/users/bookmarks/savedLinks?filter=${linkType}`, { headers })
        .then(res => res.json());
};
