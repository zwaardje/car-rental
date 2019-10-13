import { ReactNode } from 'react';

export interface Overview {
    title: string;
    subtitle?: string;
    children: ReactNode;
}
