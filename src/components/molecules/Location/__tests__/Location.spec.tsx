import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Location from '../Location';

import {
    defaultProps,
} from '../__data__/Location.mockdata';

describe('Location', () => {

    it('renders default location correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<Location {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
