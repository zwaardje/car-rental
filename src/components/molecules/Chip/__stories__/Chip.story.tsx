import React from 'react';
import { storiesOf } from '@storybook/react';

import Chip from '../Chip';

import {
    defaultProps,
} from '../__data__/Chip.mockdata';

storiesOf('Molecules|Chip', module)
    .add('default', () => (
       <Chip {... defaultProps} />
    ));
