import * as React from 'react';

import { formatDate, DATE_FORMAT } from '../../../helpers/date';

import { Button } from '../../atoms';
import { Overview as OverviewInterface } from './OverviewInterface';

import './Overview.scss';

export interface Props extends OverviewInterface {}
export interface State {
    visible: number;
}

export default class Overview extends React.Component<Props, State> {
    static displayName = 'Overview';

    state = {
        visible: 1,
    };

    loadMore = () => this.setState({
        visible: this.state.visible + 1,
    })

    render() {
        const { title, subtitle, children, startDate, endDate } = this.props;
        const { visible } = this.state;

        return (
            <section className="overview">
                <h1 className="overview__heading">{ title }</h1>
                { subtitle ? <p className="overview__subtitle">{subtitle} For the periode of {formatDate(new Date(startDate), DATE_FORMAT)} untill {formatDate(new Date(endDate), DATE_FORMAT)}</p> : null}
                <div className="overview__list-item">
                    { React.Children.map(children, (child, index) => {
                        return index < visible ? child : null;
                    })}
                </div>
                { React.Children.toArray(children).length > visible ?
                    <Button className="overview__button" onClick={this.loadMore}>
                        Load more options
                    </Button>
                : null }
            </section>
        );
    }
}
