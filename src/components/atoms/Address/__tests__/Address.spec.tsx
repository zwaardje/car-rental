import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Address from '../Address';

import {
    defaultProps,
} from '../__data__/Address.mockdata';

describe('Address', () => {

    it('renders default address correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<Address {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
