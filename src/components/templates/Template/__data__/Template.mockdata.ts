import { Template as TemplateInterface } from '../TemplateInterface';

export const defaultProps: TemplateInterface = {
    rentals: [{
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
            doors: 5,
        },
        extras: ['Emergency Roadside Assistance', 'Theft protection', 'Airport Surcharge'],
        pricing:{
            amount: 50,
            currency: 'ZAR',
        },
        pickup: {
            title: 'Pickup location',
            name: 'Cape Town International Airport',
            street: '',
            zipcode: '',
            additional: 'Main Building, Unit BG12, Central Car Rental Building',
            city: 'Cape Town',
            provence: 'Western Cape',
            country: 'South Africa',
            latitude: 18.594962,
            longitude: -33.969987,
        },
        dropoff:[{
            title: 'Dropoff location',
            name: 'Cape Town International Airport',
            street: '',
            zipcode: '',
            additional: 'Main Building, Unit BG12, Central Car Rental Building',
            city: 'Cape Town',
            provence: 'Western Cape',
            country: 'South Africa',
            latitude: 18.594962,
            longitude: -33.969987,
        }],
    }],
};
