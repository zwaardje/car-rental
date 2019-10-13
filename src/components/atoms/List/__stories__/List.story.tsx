import React from 'react';
import { storiesOf } from '@storybook/react';

import List from '../List';

import * as data from '../__data__/List.mockdata';

const stories = storiesOf('molecules|List', module);

Object.keys(data).forEach((key) => {
    stories.add(key, () => {
        return <List {... data[key]} />;
    });
});
