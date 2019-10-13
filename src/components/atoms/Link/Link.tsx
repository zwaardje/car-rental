import * as React from 'react';

import { Link as LinkInterface } from './LinkInterface';

export interface Props extends LinkInterface {}
export interface State {}

export default class Link extends React.Component<Props, State> {
    static displayName = 'Link';

    render() {
        const { children, url, className } = this.props;

        return (
            <a className={`link ${className ? ` ${className}` : ''}`} href={url}>
                {children}
            </a>
        );
    }
}
