import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Card from '../Card';

import {
    defaultProps,
} from '../__data__/Card.mockdata';

describe('Card', () => {

    it('renders default card correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<Card {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
