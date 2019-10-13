import { ReactNode, HTMLAttributes } from 'react';

export interface RouterLink extends HTMLAttributes<any>{
    url: string;
    children: ReactNode | string;
    state?: any;
    search?: any;
}
