import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '../Card';

import * as data from '../__data__/Card.mockdata';

const stories = storiesOf('molecules|Card', module);

Object.keys(data).forEach((key) => {
    stories.add(key, () => {
        return <Card {... data[key]} />;
    });
});
