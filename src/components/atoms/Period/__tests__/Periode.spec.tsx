import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Period from '../Period';

import {
    defaultProps,
} from '../__data__/Period.mockdata';

describe('Period', () => {

    it('renders default period correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<Period {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
