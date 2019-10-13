import { HTMLAttributes } from 'react';
import { IconTypes } from '../Icon/IconInterface';

export interface IconLabel extends HTMLAttributes<any> {
    icon: IconTypes;
    label?: string;
}
