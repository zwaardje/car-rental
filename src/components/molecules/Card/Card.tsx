import * as React from 'react';

import { TagList, Image } from '../../atoms';

import { Card as CardInterface } from './CardInterface';

export interface Props extends CardInterface {}
export interface State {}

export default class Card extends React.Component<Props, State> {
    static displayName = 'Card';

    render() {
        const { image } = this.props;

        return (
            <div>
                <div>
                    <Image { ... image } />
                </div>
                <div>

                </div>

            </div>
        );
    }
}
