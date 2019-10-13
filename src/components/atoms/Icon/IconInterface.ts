import { HTMLAttributes } from 'react';

export type IconTypes =
'add' |
'back'|
'calendar' |
'call' |
'cancel' |
'check' |
'clock' |
'delete' |
'edit' |
'info' |
'lightning' |
'location' |
'lock' |
'luggage' |
'person' |
'plane' |
'search' |
'star' |
'tie' |
'leaf' |
'addressbook' |
'car' |
'fullscreen' |
'car-location' |
undefined;

export interface Icon extends HTMLAttributes<any> {
    icon: IconTypes | undefined;
}
