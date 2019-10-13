import React from 'react';
import { storiesOf } from '@storybook/react';

import Link from '../Link';

import { defaultProps } from '../__data__/Link.mockdata';

storiesOf('Atoms|Link', module)
    .add('default', () => (
           <Link {... defaultProps} >
               Link primary
           </Link>
    ));
