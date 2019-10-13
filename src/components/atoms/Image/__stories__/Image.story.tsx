import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from '../Image';

import {
    defaultProps,
} from '../__data__/Image.mockdata';

storiesOf('atoms|Image', module)
    .add('default', () => (
       <Image {... defaultProps} />
    ));
