import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Map from '../Map';

import {
    defaultProps,
} from '../__data__/Map.mockdata';

describe.skip('Map', () => {

    it('renders default map correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<Map {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
