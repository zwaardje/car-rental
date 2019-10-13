import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Rating from '../Rating';

import {
    defaultProps,
} from '../__data__/Rating.mockdata';

describe('Rating', () => {

    it('renders default rating correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<Rating {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
