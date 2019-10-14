import { InputHTMLAttributes } from 'react';

export interface Input extends InputHTMLAttributes<any> {
    immediate?: boolean;
    ref?: string;
}
