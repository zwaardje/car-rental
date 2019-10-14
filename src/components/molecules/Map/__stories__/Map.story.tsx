import React from 'react';
import { storiesOf } from '@storybook/react';

import Map from '../Map';

import {
    defaultProps,
} from '../__data__/Map.mockdata';

storiesOf('organisms|Map', module)
    .addParameters({
        readme: {
            sidebar: require('../readme.md'),
        },
    })
    .add('default', () => (
       <Map {... defaultProps} />
    ));
