import { Card as CardInterface } from '../CardInterface';

export const defaultProps: CardInterface = {
    type: 'Sedan',
    brand: 'Volkswagen',
    model: 'Polo',
    image: {
        url: '/static/images/polo.jpg',
    },
    specifications: {
        seats: 5,
        airco: 'Airconditioning',
        luggage: 2,
        transmission: 'Manual',
    },
    extras: ['Emergency Roadside Assistance', 'Theft protection', 'Airport Surcharge'],
    pricing:{
        amount: 50,
        currency: 'ZAR',
    },
};
