import { Checkbox as CheckboxInterface } from '../CheckboxInterface';

export const defaultProps: CheckboxInterface = {
    name: 'checkbox',
    value: 2,
    label: 'checkbox',
    onChange: value => console.log(value),
};
