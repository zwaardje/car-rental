import { ReactNode, HTMLAttributes } from 'react';

export interface Link extends HTMLAttributes<any>{
    url: string;
    children: ReactNode | string;
}
