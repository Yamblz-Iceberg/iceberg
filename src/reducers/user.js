const initialState = {
    name: 'Архип',
    lastname: 'Бессмертный',
    photo: 'https://i.ytimg.com/vi/cnxCp34BxDY/hqdefault.jpg',
    description: 'За братуху втащу вертуху',
    rating: 4.9,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    default:
        return state;
    }
};

export { reducer };
