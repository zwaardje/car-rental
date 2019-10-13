import * as React from 'react';

import { Overview as OverviewInterface } from './OverviewInterface';

export interface Props extends OverviewInterface {}
export interface State {}

export default class Overview extends React.Component<Props, State> {
    static displayName = 'Overview';

    render() {
        const { title, children } = this.props;

        return (
            <div>
                { title }
                { children }
            </div>
        );
    }
}
