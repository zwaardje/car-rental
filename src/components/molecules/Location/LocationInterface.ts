import { AddressInterface } from '../../atoms';

export interface Location extends AddressInterface {
    title: string;
    latitude: number;
    longitude: number;
}
