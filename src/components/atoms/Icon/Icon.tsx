import * as React from 'react';

import { Icon as IconInterface } from './IconInterface';

import './style.scss';

export interface Props extends IconInterface {}
export interface State {}

export default class Icon extends React.Component<Props, State> {
    static displayName = 'Icon';

    defaultIconUrl: string = '/static/icons/iconset.svg';

    get iconRef(): string {
        const { icon } = this.props;
        const url =  `${ this.defaultIconUrl }#icon-${ icon }`;

        return url;
    }

    render() {
        const { icon, className } = this.props;

        if (!icon) return null;

        return (
            <svg className={`icon icon-${icon}${className ? ` ${className}` : ''}`}>
                <use xlinkHref={this.iconRef} href={this.iconRef}></use>
            </svg>
        );
    }
}
