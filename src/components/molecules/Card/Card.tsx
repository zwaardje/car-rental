import * as React from 'react';

import { Currency, Image, Checkbox, Button, Cta } from '../../atoms';
import Chip  from '../Chip';

import { Card as CardInterface } from './CardInterface';

import './Card.scss';

export interface Props extends CardInterface {}
export interface State {}

export default class Card extends React.Component<Props, State> {
    static displayName = 'Card';

    render() {
        const { type, image, brand, model, specifications, extras, pricing } = this.props;

        return (
            <article className="rental">
                <header className="rental__header">
                    <div className="rental__heading">
                        <h2 className="rental__title">{brand} - {model}</h2>
                        <p className="rental__subtitle">{type}</p>
                    </div>
                    <div className="rental__pricing">
                        <Currency price={pricing} round={true} locales="sa"  />
                        <p className="rental__pricing-rate">price per day</p>
                    </div>
                </header>
                <div className="rental__body">
                    <div className="rental__body--top">
                        <div className="rental__image-container">
                            <Image className="rental__image" { ... image } />
                        </div>
                        <ul className="rental__specifications">
                            { Object.keys(specifications).map((specification: any , index: number) => (
                                <li key={index} className="rental__specifications-item">
                                    <Chip type="primary"
                                        icon={specification}
                                        label={specifications[specification]}  />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rental__body--bottom">
                        <div className="rental__extras">
                            <h4>
                                Add extra options to your rental:
                            </h4>
                            <ul className="rental__extras-list">
                                { extras.map((extra:string, index:number) => (
                                    <li key={index} className="rental__extras-item">
                                        <Checkbox className="rental__extras-option" value={extra} name={extra}>
                                            {extra}
                                        </Checkbox>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <footer className="rental__footer">
                    <Button className="rental__booking">
                            Book this car
                    </Button>
                    <Cta className="rental__cta" url="/compare" label="Compare this rental" />
                </footer>
            </article>
        );
    }
}
