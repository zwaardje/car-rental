import { connect } from 'react-redux';
import Template from './Template';

const state = (state) => {
    const { rentals } = state;

    return {
        rentals,
    };
};

export default connect(state)(Template);
