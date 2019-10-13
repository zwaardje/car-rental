import * as React from 'react';
import { Link } from 'react-router-dom';

import { RouterLink as RouterLinkInterface } from './RouterLinkInterface';

export interface Props extends RouterLinkInterface {}
export interface State {}

export default class RouterLink extends React.Component<Props, State> {
    static displayName = 'RouterLink';

    render() {
        const { children, url, state, search, className } = this.props;

        return (
            <Link className={`link ${className ? ` ${className}` : ''}`} to={{
                state,
                search,
                pathname: url,
            }}>
                {children}
            </Link>
        );
    }
}
'';
