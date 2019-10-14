export const defaultState = [{
    type: 'Sedan',
    brand: 'Volkswagen',
    model: 'Polo',
    image: {
        url:  '/static/images/polo.jpg',
    },
    specifications: {
        seats: '5 seats',
        airco: 'airconditioning',
        luggage: '2 suitcases',
        transmission: 'manual',
        doors: '4 doors',
    },
    extras: ['Emergency Roadside Assistance', 'Theft protection', 'Airport Surcharge', 'Amendments', 'TomTom', 'Fuel topped up'],
    pricing:{
        amount: 50,
        currency: 'ZAR',
    },
    pickup: {
        name: 'Cape Town International Airport',
        street: '',
        zipcode: '',
        additional: 'Main Building, Unit BG12, Central Car Rental Building',
        city: 'Cape Town',
        provence: 'Western Cape',
        country: 'South Africa',
        latitude: -33.969987 ,
        longitude: 18.594962,
    },
    dropoff:[{
        name: 'Cape Town International Airport',
        street: '',
        zipcode: '',
        additional: 'Main Building, Unit BG12, Central Car Rental Building',
        city: 'Cape Town',
        provence: 'Western Cape',
        country: 'South Africa',
        latitude: -33.969987,
        longitude: 18.594962,
    }],
},{
    type: 'Sedan',
    brand: 'Toyota',
    model: 'Carolla',
    image: {
        url:  '/static/images/carolla.jpg',
    },
    specifications: {
        seats: 5,
        airco: 'Airconditioning',
        luggage: 2,
        transmission: 'Manual',
    },
    extras: ['Emergency Roadside Assistance', 'Theft protection', 'Airport Surcharge'],
    pricing:{
        amount: 55,
        currency: 'ZAR',
    },
    pickup: {
        name: 'Cape Town International Airport',
        street: '',
        zipcode: '',
        additional: 'Main Building, Unit BG12, Central Car Rental Building',
        city: 'Cape Town',
        provence: 'Western Cape',
        country: 'South Africa',
        latitude: -33.969987 ,
        longitude: 18.594962,
    },
    dropoff:[{
        name: 'Cape Town International Airport',
        street: '',
        zipcode: '',
        additional: 'Main Building, Unit BG12, Central Car Rental Building',
        city: 'Cape Town',
        provence: 'Western Cape',
        country: 'South Africa',
        latitude: -33.969987,
        longitude: 18.594962,
    }],
},
];

export const rentals = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
