import { HTMLAttributes } from 'react';

export interface Value {
    value: string | number;
    checked: boolean;
    error: boolean;
}

export interface OnChange {
    (Value): string | number | void;
}

export interface Checkbox extends HTMLAttributes<any>{
    value: string | number;
    name: string;
    label?: string;
    checked?: boolean;
    onChange?: OnChange;
}
