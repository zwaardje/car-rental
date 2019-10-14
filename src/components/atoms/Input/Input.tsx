import * as React from 'react';

import { Input as InputInterface } from './InputInterface';

export interface Props extends InputInterface {}
export interface State {}

export default class Input extends React.Component<Props, State> {
    static displayName = 'Input';

    private events: string[] = ['onClick', 'onFocus', 'onBlur', 'onChange'];
    private boundEvents: object = {};
    private errorClass: string = 'input__error';
    private validClass: string = 'input__valid';
    private hasError: boolean = false;

    componentWillMount () {
        this.registerEventHandlers();
    }

    registerEventHandlers() {
        this.events.forEach((event) => {
            if (this.props[event]) {
                const fn = (e) => {
                    if (this.props[event] && this.checkValidity()) {
                        this.props[event]({
                            value: e.currentTarget.value,
                            error: this.hasError,
                            element: e.currentTarget,
                        });
                    }
                };
                this[event] = fn;
                this.boundEvents[event] = this[event];
            }
        });
    }

    checkValidity() {
        const { required, type, immediate } = this.props;
        const input = this.refs.input as HTMLInputElement;

        if (type && required && immediate && input) {
            if (!input.checkValidity()) {
                if (!input.classList.contains(this.errorClass)) {
                    input.classList.remove(this.validClass);
                    input.classList.add(this.errorClass);
                    this.hasError = true;
                }
                return false;
            }
            input.classList.remove(this.errorClass);
            input.classList.add(this.validClass);
            this.hasError = false;

            return true;
        }
        input.classList.add(this.validClass);
        this.hasError = false;
        return true;
    }

    get input () {
        const { className, immediate, ref, ... rest } = this.props;

        const props = {
            ... rest,
            ... this.boundEvents,
            ref: 'input',
            className: className ? 'input'.concat(` ${className}`) : 'input',
        };

        return React.createElement('input', props, null);
    }

    render() {
        return this.input;
    }
}
