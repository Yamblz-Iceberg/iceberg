export const fetchSearchResult = searchText =>
    fetch(`https://iceberg-project.herokuapp.com/feed?search=${searchText}`)
        .then(res => res.json());
