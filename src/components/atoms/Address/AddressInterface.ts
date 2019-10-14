import { HTMLAttributes } from 'react';

export interface Address extends HTMLAttributes<any> {
    name?: string;
    additional?: string;
    street?: string;
    zipcode?: string;
    city?: string;
    provence?: string;
    country?: string;
}
