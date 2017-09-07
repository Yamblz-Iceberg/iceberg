export const fetchUser = (token) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
    });

    return fetch('https://iceberg-project.herokuapp.com/users/', { headers })
        .then(res => res.json());
};
