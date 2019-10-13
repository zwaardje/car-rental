import * as React from 'react';
import * as renderer from 'react-test-renderer';

import List from '../List';

import {
    defaultProps,
} from '../__data__/List.mockdata';

describe('List', () => {

    it('renders default list correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<List {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
