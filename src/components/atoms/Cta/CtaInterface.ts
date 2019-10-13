import { HTMLAttributes} from 'react';

export interface Cta extends HTMLAttributes<any>{
    url: string;
    label: string;
}
