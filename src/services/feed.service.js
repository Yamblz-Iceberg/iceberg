export const fetchFeed = queryParam =>
    fetch(`https://iceberg-project.herokuapp.com/feed?sort=${queryParam}`)
        .then(res => res.json());
