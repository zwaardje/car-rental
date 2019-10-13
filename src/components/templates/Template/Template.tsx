import * as React from 'react';

import Overview from '../../organisms/Overview';
import { Card, CardInterface as RentalInterface } from '../../molecules';

import { Template as TemplateInterface } from './TemplateInterface';

import './style.scss';

export interface Props extends TemplateInterface {}
export interface State {}

export default class Template extends React.Component<Props, State> {
    static displayName = 'Template';

    render() {
        const { rentals } = this.props;

        return (
            <div>
                <Overview title="Car rentals">
                    { rentals.map((rental: RentalInterface , index: number) => (
                        <Card key={index} { ... rental} />
                    ))}
                </Overview>
            </div>
        );
    }
}
