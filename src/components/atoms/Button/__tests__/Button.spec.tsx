import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Button from '../Button';

import {
    defaultProps,
} from '../__data__/Button.mockdata';

describe('Button', () => {

    it('renders default button correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<Button {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
