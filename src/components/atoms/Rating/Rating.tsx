import * as React from 'react';

import Icon from '../Icon';
import { Rating as RatingInterface } from './RatingInterface';

export interface Props extends RatingInterface {}
export interface State {
    rating: number;
}

export default class Rating extends React.Component<Props, State> {
    static displayName = 'Rating';
    private standard: number = 5;

    state = {
        rating: 0,
        total: 0,
    };

    componentWillMount() {
        this.convertRating();
    }

    convertRating () {
        const { rating, total } = this.props;

        if (total === this.standard) {
            this.setState({ rating: Math.ceil(rating) });
        }

        if (total > this.standard) {
            this.setState({
                rating: Math.ceil(
                    rating / (total / this.standard),
                ),
            });
        }

        if (total < this.standard) {
            this.setState({
                rating: Math.ceil(
                    rating * (this.standard / total),
                ),
            });
        }
    }

    render() {
        const { icon } = this.props;
        const { rating } = this.state;

        return (
            <div>
                {
                    Array.from(Array(this.standard), (_, x) => {
                        return <Icon key={x} className={`rating__icon${x + 1 <= rating ? ' rating__icon--full' : '' }`} icon={icon} />;
                    })
                }
                <span>{rating} / {this.standard}</span>
            </div>
        );
    }
}
