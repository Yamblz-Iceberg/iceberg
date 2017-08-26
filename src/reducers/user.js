const initialState = {
    name: 'Архип',
    lastname: 'Быстров',
    photo: 'https://i.pinimg.com/736x/18/35/aa/1835aae4518adfc95d6d119a4685048f.jpg',
    description: 'С юмором по жизни',
    rating: 4.9,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    default:
        return state;
    }
};

export { reducer };
