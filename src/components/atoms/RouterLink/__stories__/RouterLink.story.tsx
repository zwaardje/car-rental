import React from 'react';
import { storiesOf } from '@storybook/react';

import RouterLink from '../RouterLink';

import { defaultProps } from '../__data__/RouterLink.mockdata';

storiesOf('Atoms|RouterLink', module)
    .add('default', () => (
        <RouterLink {... defaultProps} >
            RouterLink primary
        </RouterLink>
    ));
