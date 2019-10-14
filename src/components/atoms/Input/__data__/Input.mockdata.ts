import { Input as InputInterface } from '../InputInterface';

export const defaultProps: InputInterface = {
    onClick: value => console.log(value),
    onChange: value => console.log(value),
    type: 'text',
    required: true,
    immediate: true,
};

export const Radio: InputInterface = {
    onBlur: value => console.log(value),
    onChange: value => console.log(value),
    type: 'radio',
    required: true,
    immediate: true,
};

export const Password: InputInterface = {
    onBlur: value => console.log(value),
    onChange: value => console.log(value),
    type: 'password',
    required: true,
    immediate: true,
};

export const Email: InputInterface = {
    onBlur: value => console.log(value),
    onChange: value => console.log(value),
    type: 'email',
    required: true,
    immediate: true,
};

export const Checkbox: InputInterface = {
    onBlur: value => console.log(value),
    onChange: value => console.log(value),
    type: 'checkbox',
    required: true,
    immediate: true,
};
