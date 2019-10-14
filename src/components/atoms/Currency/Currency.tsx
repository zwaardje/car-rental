import * as React from 'react';

import { Currency as CurrencyInterface } from './CurrencyInterface';

export interface Props extends CurrencyInterface {}
export interface State {}

export default class Currency extends React.Component<Props, State> {
    static displayName = 'Currency';

    get formatRoundPrice ()  {
        const { locales, price: { currency, amount } } = this.props;

        return new Intl.NumberFormat(locales, {
            currency,
            style: 'currency',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(Math.round(amount));
    }

    get formatPrice () {
        const { locales, price: { currency, amount } } = this.props;
        return new Intl.NumberFormat(locales, {
            currency,
            style: 'currency',
        }).format(amount);
    }

    render() {
        const { round } = this.props;

        const amount = round ? this.formatRoundPrice : this.formatPrice;

        return (
            <span className="price">
                {amount}
            </span>
        );
    }
}
