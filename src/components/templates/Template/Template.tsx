import * as React from 'react';

import Overview from '../../organisms/Overview';
import { Card, Location } from '../../molecules';

import { Template as TemplateInterface, RentalInterface } from './TemplateInterface';

import './style.scss';

export interface Props extends TemplateInterface {}
export interface State {}

export default class Template extends React.Component<Props, State> {
    static displayName = 'Template';

    render() {
        const { rentals } = this.props;

        return (
            <div>
                <Overview title="Car rental" subtitle="Select the option that matches your needs." startDate="2019-09-25T07:17:10.330Z" endDate="2019-10-12T07:17:10.330Z">
                    { rentals.map((rental: RentalInterface , index: number) => (
                        <React.Fragment key={index}>
                            <Card { ... rental} />
                            <Location title="Pickup point" {... rental.pickup} />
                        </React.Fragment>
                    ))}
                </Overview>
            </div>
        );
    }
}
