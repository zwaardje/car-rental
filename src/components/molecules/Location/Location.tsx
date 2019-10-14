import * as React from 'react';

import { Address } from '../../atoms';
import Map from '../Map';

import { Location as LocationInterface } from './LocationInterface';

import './Location.scss';

export interface Props extends LocationInterface {}
export interface State {}

export default class Location extends React.Component<Props, State> {
    static displayName = 'Location';

    private bbBox = [
        [18.594962, -33.969987],
        [18.6418516261, -34.1034522488],
        [18.6418516261, -33.8493207422],
        [18.3286657859, -33.8493207422],
        [18.3286657859, -34.1034522488],
    ]; // cape town bbBox

    createMapFeature = ({ name, lat, long }) => ({
        name,
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [long, lat],
                    },
                },
            ],
        },
        layers: [
            {
                id: `${name}-points`,
                type: 'symbol',
                source: name,
                layout: {
                    'icon-image': name,
                    'icon-rotation-alignment': 'map',
                    'symbol-placement': 'point',
                    'icon-size': 0.5,
                },
            },
        ],
    })

    setPinLocation = () => {
        const { latitude, longitude }  = this.props;

        return this.createMapFeature({
            name: 'pin-location',
            lat: latitude,
            long: longitude,
        });

    }

    render() {
        const { title, latitude, longitude, ... address } = this.props;

        return (
            <section className="location">
                <h3 className="location__heading">{title}</h3>
                <div className="location__body">
                    <Address className="location__address" {... address} />
                    <Map className="location__map" bbBox={this.bbBox} sources={[this.setPinLocation()]}  />
                </div>
            </section>
        );
    }
}
