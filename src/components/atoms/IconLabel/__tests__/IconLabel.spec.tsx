import * as React from 'react';
import * as renderer from 'react-test-renderer';

import IconLabel from '../IconLabel';

import {
    defaultProps,
} from '../__data__/IconLabel.mockdata';

describe('IconLabel', () => {

    it('renders default iconlabel correctly', () => {
        const props = { ... defaultProps };
        const tree = renderer.create(<IconLabel {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
