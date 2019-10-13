import * as React from 'react';

import { Button as ButtonInterface } from './ButtonInterface';

export interface Props extends ButtonInterface {}
export interface State {}

export default class Button extends React.Component<Props, State> {
    static displayName = 'Button';

    render() {
        const { children, className, onClick } = this.props;

        return (
            <button className={`button${className ? ` ${className}` : ''}`}
                    onClick={onClick}>
                { children }
            </button>
        );
    }
}
