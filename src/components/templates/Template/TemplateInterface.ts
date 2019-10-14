import { Card as CardInterface } from '../../molecules/Card/CardInterface';
import { Location as LocationInterface } from '../../molecules/Location/LocationInterface';

export interface RentalInterface extends CardInterface {
    pickup: LocationInterface;
    dropoff: LocationInterface[];
}

export interface Template {
    rentals: RentalInterface[];
}
