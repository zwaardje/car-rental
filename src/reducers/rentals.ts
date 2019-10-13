export const defaultState = {
    items: [{
        type: 'Sedan',
        brand: 'Volkswagen',
        model: 'Polo',
        image: '/static/images/polo.jgp',
        specifications: {
            seats: 5,
            airco: true,
            luggage: 2,
            transmission: 'manual',
        },
        extras: ['Emergency Roadside Assistance', 'Theft protection', 'Airport Surcharge'],
        pricing:{
            price: 50,
            currency: 'ZAR',
        },
    }],
};

export const rentals = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
