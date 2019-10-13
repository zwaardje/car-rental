import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import RouterLink from '../RouterLink';

import { defaultProps } from '../__data__/RouterLink.mockdata';

describe('RouterLink', () => {

    it('renders primary routerlink correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(
            <Router>
                <RouterLink {... props} />
            </Router>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
