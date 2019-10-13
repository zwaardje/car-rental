import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Icon from '../Icon';

import {
    check,
} from '../__data__/Icon.mockdata';

describe('Icon', () => {

    it('renders check icon correctly', () => {
        const props = { ... check };
        const tree = renderer.create(<Icon {... props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
