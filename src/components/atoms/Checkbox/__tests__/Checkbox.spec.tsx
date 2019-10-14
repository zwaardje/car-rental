import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Checkbox from '../Checkbox';

import {
    defaultProps,
} from '../__data__/Checkbox.mockdata';

describe('Checkbox', () => {

    it('renders default checkbox correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<Checkbox {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
