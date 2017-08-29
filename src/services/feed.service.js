export const fetchFeed = () => fetch('https://iceberg-project.herokuapp.com/feed')
    .then(res => res.json());
