import * as React from 'react';

import Icon from '../Icon/Icon';
import { IconLabel as IconLabelInterface } from './IconLabelInterface';

export interface Props extends IconLabelInterface {}
export interface State {}

export default class IconLabel extends React.Component<Props, State> {
    static displayName = 'IconLabel';

    render() {
        const { icon, children, label } = this.props;

        return (
            <React.Fragment>
                <Icon icon={icon} />
                { children || label }
            </React.Fragment>
        );
    }
}
