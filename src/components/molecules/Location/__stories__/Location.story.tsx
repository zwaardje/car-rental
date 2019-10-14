import React from 'react';
import { storiesOf } from '@storybook/react';

import Location from '../Location';

import * as data from '../__data__/Location.mockdata';

const stories = storiesOf('molecules|Location', module);

Object.keys(data).forEach((key) => {
    stories.add(key, () => {
        return <Location {... data[key]} />;
    });
});
