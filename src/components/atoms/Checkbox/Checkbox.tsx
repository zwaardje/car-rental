import * as React from 'react';

import Input  from '../Input';
import { Checkbox as CheckboxInterface } from './CheckboxInterface';

import './Checkbox.scss';

export interface Props extends CheckboxInterface {}
export interface State {}

export default class Checkbox extends React.Component<Props, State> {
    static displayName = 'Checkbox';

    onChange = (e) => {
        const { onChange } = this.props;
        if (onChange) {
            const { element, ...rest } = e;
            onChange({ ... rest, checked: element.checked });
        }
    }

    render() {
        const {  name, label, value, children, checked, className } = this.props;

        return (
            <label htmlFor={name} className={`checkbox-label${className ? ` ${className}` : ''}`}>
                <Input id={name}
                    onChange={this.onChange}
                    className="checkbox"
                    type="checkbox"
                    value={value}
                    name={name}
                    checked={checked}
                    />
                {children || label}
            </label>
        );
    }
}
