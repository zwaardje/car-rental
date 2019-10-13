import React from 'react';
import { storiesOf } from '@storybook/react';

import Cta from '../Cta';

import * as data from '../__data__/Cta.mockdata';

const stories = storiesOf('atoms|Cta', module);

Object.keys(data).forEach((key) => {
    stories.add(key, () => {
        return <Cta {... data[key]} />;
    });
});
