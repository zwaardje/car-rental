import * as React from 'react';

import { Tag as TagInterface } from './TagInterface';

export interface Props extends TagInterface {}
export interface State {}

export default class Tag extends React.Component<Props, State> {
    static displayName = 'Tag';

    render() {
        const { label } = this.props;

        return (
            <label>
                { label }
            </label>
        );
    }
}
