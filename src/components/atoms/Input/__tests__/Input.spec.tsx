import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Input from '../Input';

import {
    defaultProps,
} from '../__data__/Input.mockdata';

describe('Input', () => {

    it('renders default input correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<Input {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
