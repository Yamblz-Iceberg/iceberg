export const fetchSearchResult = (searchText, token) => {
    const headers = new Headers({
        Authorization: token,
    });

    return fetch(`https://iceberg-project.herokuapp.com/feed?search=${searchText}`, { headers })
        .then(res => res.json());
};
