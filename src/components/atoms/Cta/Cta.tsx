import * as React from 'react';

import { Cta as CtaInterface } from './CtaInterface';

import './Cta.scss';

export interface Props extends CtaInterface {}
export interface State {}

export default class Cta extends React.Component<Props, State> {
    static displayName = 'Cta';

    render() {
        const { url, label, className } = this.props;

        return (
            <a href={url} className={`cta ${className ? ` ${className}` : ''}`}>
                {label}
            </a>
        );
    }
}
