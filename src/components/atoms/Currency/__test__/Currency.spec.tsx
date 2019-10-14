import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Currency from '../Currency';

import {
    defaultProps,
    round,
} from '../__data__/Currency.mockdata';

describe('Currency', () => {

    it('renders default dutch currency correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<Currency {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders round dutch currency correctly', () => {
        const props = { ... round };
        const tree = renderer.create(<Currency {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
