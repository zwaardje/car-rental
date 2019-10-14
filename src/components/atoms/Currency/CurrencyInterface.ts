export interface Price {
    currency: string;
    amount: number;
}

export interface Currency {
    round: boolean;
    locales: string;
    price: Price;
}
