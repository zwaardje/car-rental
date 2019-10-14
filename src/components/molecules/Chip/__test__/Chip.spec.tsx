import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Chip from '../Chip';

import {
    defaultProps,
} from '../__data__/Chip.mockdata';

describe('Chip', () => {

    it('renders defaultProps Chip correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<Chip {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
