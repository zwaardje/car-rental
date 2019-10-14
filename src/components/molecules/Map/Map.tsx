import * as React from 'react';
import mapboxgl, { Map as MapBoxInterface } from 'mapbox-gl/dist/mapbox-gl';

import { Map as MapInterface } from './MapInterface';

import './style.scss';

export interface Props extends MapInterface { }
export interface State {
    mapLoaded: boolean;
}

export default class Map extends React.Component<Props, State> {
    static displayName = 'Map';
    map: MapBoxInterface | undefined;
    mapboxImageNames: string[] = ['pin-location'];

    state = {
        mapLoaded: false,
    };

    componentDidMount() {
        mapboxgl.accessToken = process.env.MAPBOX_KEY;

        const container = document.querySelector('.map');

        if (container && process.env.MAPBOX_KEY) {
            this.map = new mapboxgl.Map({
                container,
                center: {
                    lat: -33.969987,
                    lon: 18.594962,
                },
                style: process.env.MAPBOX_STYLES || 'mapbox://styles/nielsaulman/cj3bc4noi00002slkp5t0grjz',
                zoom: 14,
                preserveDrawingBuffer: false,
            });

            if (this.map) {
                this.map.on('load', this.mapLoad);
            }
        }
    }

    async componentDidUpdate() {
        if (this.state.mapLoaded) {
            await this.updateMapboxSources();
            await this.updatebbBox();
        }
    }

    async updatebbBox() {
        const { bbBox } = this.props;
        if (bbBox) {
            await this.map.fitBounds(bbBox, { padding: 40 });
        }
    }

    updateMapboxSources() {
        const { sources } = this.props;

        console.log(sources);

        if (sources && sources.length) {
            sources.forEach((source) => {

                const { name, type, data, layers } = source;

                if (this.map.getSource(name)) {
                    this.map.getSource(name).setData(data);
                } else {
                    this.map.addSource(name, { type, data });
                    layers.forEach(layer => this.map.addLayer(layer));
                }
            });
        }
    }

    loadAssets() {
        return new Promise((resolve) => {
            Promise.all(this.mapboxImageNames.map((name) => {
                const url = `/static/images/${name}.png`;
                return new Promise((resolve) => {
                    if (this.map) {
                        this.map.loadImage(url, (error, image, options) => {
                            if (error) throw error;
                            if (this.map) {
                                this.map.addImage(name, image, options);
                                resolve();
                            }
                        });
                    }
                });
            }));
            resolve();
        });
    }

    mapLoad = async () => {
        await this.loadAssets();
        await this.setState({ ...this.state, mapLoaded: true });
    }

    render() {
        const { className } = this.props;

        return (
            <div className={`map${className ? ` ${className}` : ''}`} ref="container"></div>
        );
    }
}
