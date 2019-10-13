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
        airco: true,
        luggage: 2,
        transmission: 'manual',
    },
    extras: ['Emergency Roadside Assistance', 'Theft protection', 'Airport Surcharge'],
    pricing:{
        price: 50,
        currency: 'ZAR',
    },
};
