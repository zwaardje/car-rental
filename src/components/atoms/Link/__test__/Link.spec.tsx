import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Link from '../Link';

import { defaultProps } from '../__data__/Link.mockdata';

describe('Link', () => {

    it('renders primary link correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<Link {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
