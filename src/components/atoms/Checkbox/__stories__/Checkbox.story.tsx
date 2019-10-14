import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from '../Checkbox';

import {
    defaultProps,
} from '../__data__/Checkbox.mockdata';

storiesOf('atoms|Checkbox', module)
    .add('default', () => (
       <Checkbox {... defaultProps} />
    ));
