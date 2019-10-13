import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Image from '../Image';

import {
    defaultProps,
} from '../__data__/Image.mockdata';

describe('Image', () => {

    it('renders default image correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<Image {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
