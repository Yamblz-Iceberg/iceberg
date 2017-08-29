export const fetchCollection = collectionId => fetch(`https://iceberg-project.herokuapp.com/collections/${collectionId}`)
    .then(res => res.json());
