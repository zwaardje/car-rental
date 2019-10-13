import React from 'react';
import { storiesOf } from '@storybook/react';

import Template from '../Template';

import {
    defaultProps,
} from '../__data__/Template.mockdata';

storiesOf('templates', module)
    .addParameters({
        readme: {
            sidebar: require('../readme.md'),
        },
    })
    .add('Template', () => (
       <Template {... defaultProps} />
    ));
