import React from 'react';
import { storiesOf } from '@storybook/react';

import Rating from '../Rating';

import * as data from '../__data__/Rating.mockdata';

const stories = storiesOf('atoms|Rating', module);

Object.keys(data).forEach((key) => {
    stories.add(key, () => {
        return <Rating {... data[key]} />;
    });
});
