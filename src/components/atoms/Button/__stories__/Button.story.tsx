import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../Button';

import {
    defaultProps,
} from '../__data__/Button.mockdata';

storiesOf('atoms|Button', module)
    .add('default', () => (
       <Button {... defaultProps} >
           Button value
       </Button>
    ));
