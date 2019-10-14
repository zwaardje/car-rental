import { ReactNode } from 'react';
import { string } from 'prop-types';

export interface Overview {
    title: string;
    subtitle?: string;
    children: ReactNode;
    startDate: string;
    endDate: string;
}
