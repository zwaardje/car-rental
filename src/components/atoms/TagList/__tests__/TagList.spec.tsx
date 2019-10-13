import * as React from 'react';
import * as renderer from 'react-test-renderer';

import TagList from '../TagList';

import {
    defaultProps,
} from '../__data__/TagList.mockdata';

describe('TagList', () => {

    it('renders default taglist correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<TagList {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
