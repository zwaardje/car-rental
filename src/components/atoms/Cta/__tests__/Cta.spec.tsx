import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Cta from '../Cta';

import {
    defaultProps,
} from '../__data__/Cta.mockdata';

describe('Cta', () => {

    it('renders default cta correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<Cta {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
