import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Template from '../Template';

import {
    defaultProps,
} from '../__data__/Template.mockdata';

describe('Template', () => {

    it('renders default template correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<Template {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
