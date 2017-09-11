export const getSavedCollectionsFetch = (token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/bookmarks/savedCollections/', { headers })
        .then(res => res.json());
};

export const getCreatedCollectionsFetch = (token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/bookmarks/createdCollections/', { headers })
        .then(res => res.json());
};

export const getAddedLinksFetch = (token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/bookmarks/addedLinks/', { headers })
        .then(res => res.json());
};

export const getSavedLinksFetch = (token, linkType) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch(`https://iceberg-project.herokuapp.com/users/bookmarks/savedLinks?filter=${linkType}`, { headers })
        .then(res => res.json());
};
