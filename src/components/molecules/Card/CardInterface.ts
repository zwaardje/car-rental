import { Image } from '../../atoms/Image/ImageInterface';

export interface Specifications {
    seats: number;
    airco: boolean;
    luggage: number;
    transmission: string;
}

export interface Pricing {
    price: number;
    currency: string;
}

export interface Card {
    type: string;
    brand: string;
    model: string;
    image: Image;
    specifications: Specifications;
    extras: string[];
    pricing: Pricing;
}
