export const fetchCards = async () => fetch('https://iceberg-project.herokuapp.com/feed')
    .then(res => res.json())
    .then(json => json.cards);
