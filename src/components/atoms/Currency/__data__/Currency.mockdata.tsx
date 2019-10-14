import { Currency as CurrencyInterface } from '../CurrencyInterface';

export const defaultProps: CurrencyInterface = {
    round: false,
    locales: 'nl',
    price: {
        currency: 'EUR',
        amount: 43.39,
    },
};

export const round: CurrencyInterface = {
    round: true,
    locales: 'nl',
    price: {
        currency: 'EUR',
        amount: 43.39,
    },
};
