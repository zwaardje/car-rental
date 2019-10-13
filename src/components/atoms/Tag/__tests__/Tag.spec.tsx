import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Tag from '../Tag';

import {
    defaultProps,
} from '../__data__/Tag.mockdata';

describe('Tag', () => {

    it('renders default tag correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<Tag {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
