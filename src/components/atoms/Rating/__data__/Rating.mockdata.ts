import { Rating as RatingInterface } from '../RatingInterface';

export const defaultProps: RatingInterface = {
    rating: 4,
    total: 5,
    icon: 'clock',
};
export const convertDown: RatingInterface = {
    rating: 5,
    total: 10,
    icon: 'clock',
};

export const convertUp: RatingInterface = {
    rating: 1.5,
    total: 3,
    icon: 'clock',
};
