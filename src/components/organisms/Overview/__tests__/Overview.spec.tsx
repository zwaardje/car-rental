import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Overview from '../Overview';

import {
    defaultProps,
} from '../__data__/Overview.mockdata';

describe('Overview', () => {

    it('renders default overview correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<Overview {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
