import * as React from 'react';

import { Address as AddressInterface } from './AddressInterface';

import './Address.scss';

export interface Props extends AddressInterface {}
export interface State {}

export default class Address extends React.Component<Props, State> {
    static displayName = 'Address';

    render() {
        const { name, additional, street, zipcode, city, provence, country } = this.props;

        return (
            <address className="address">
                { name ? <p className="address__name">{name}</p> : null }
                { street ? <p className="address__street">{street}</p> : null }
                { additional ? <p className="address__additional">{additional}</p> : null }
                { zipcode || city ? <p className="address__city">{zipcode} {city}</p> : null }
                { provence || country ?  <p className="address__country">{provence} {country}</p> : null }
            </address>
        );
    }
}
