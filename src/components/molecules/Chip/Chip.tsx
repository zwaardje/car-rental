import * as React from 'react';

import { Icon } from '../../atoms';
import { Chip as ChipInterface } from './ChipInterface';

import './Chip.scss';

export interface Props extends ChipInterface {}
export interface State {}

export default class Chip extends React.Component<Props, State> {
    static displayName = 'Chip';

    render() {
        const { icon, label, type } = this.props;

        return (
            <div className={`chip chip--${type}`}>
                <div className="chip__icon">
                    <Icon icon={icon} />
                </div>
                <span className="chip__label">
                    {label}
                </span>
            </div>
        );
    }
}
