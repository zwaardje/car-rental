import { Image } from '../../atoms/Image/ImageInterface';

export interface Specifications {
    seats?: string | number;
    airco?: string;
    luggage?: string | number;
    transmission?: string;
    doors?: string | number ;
}

export interface Pricing {
    amount: number;
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
