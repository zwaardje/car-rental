import * as React from 'react';

import { Period as PeriodInterface } from './PeriodInterface';

export interface Props extends PeriodInterface {}
export interface State {}

export default class Period extends React.Component<Props, State> {
    static displayName = 'Periode';

    get hasDates() {
        const { start, end } = this.props;
        return start && end;
    }

    get renderDateBlock() {
        const { start, end, days } = this.props;

        return (
            <div>
                {`${start} - ${end}`}
                <span>{days} days</span>
            </div>
        );
    }

    get renderDayBlock() {
        const { days } = this.props;

        return (
            <div>
                {days} days
            </div>
        );
    }

    render() {
        return this.hasDates ? this.renderDateBlock : this.renderDayBlock;
    }
}
