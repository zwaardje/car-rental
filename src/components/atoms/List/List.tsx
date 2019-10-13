import * as React from 'react';

import { List as ListInterface } from './ListInterface';

export interface Props extends ListInterface {}
export interface State {}

export default class List extends React.Component<Props, State> {
    static displayName = 'List';

    render() {
        const { children } = this.props;

        return (
            <ul>
                { React.Children.map(children, (child: any, index: number) => (
                    <li key={index}>
                        {child}
                    </li>
                ))}
            </ul>
        );
    }
}
