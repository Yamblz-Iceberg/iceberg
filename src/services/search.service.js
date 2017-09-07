export const fetchSearchResult = (searchText, token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });
    return fetch(`https://iceberg-project.herokuapp.com/feed?search=${encodeURIComponent(searchText)}`, { headers })
        .then(res => res.json());
};
