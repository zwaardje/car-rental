import * as React from 'react';

import RouterLink from '../RouterLink';

import { Cta as CtaInterface } from './CtaInterface';

export interface Props extends CtaInterface {}
export interface State {}

export default class Cta extends React.Component<Props, State> {
    static displayName = 'Cta';

    render() {
        const { url, label } = this.props;

        return (
            <RouterLink url={url}>
                {label}
            </RouterLink>
        );
    }
}
