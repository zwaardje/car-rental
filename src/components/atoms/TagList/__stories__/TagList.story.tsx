import React from 'react';
import { storiesOf } from '@storybook/react';

import TagList from '../TagList';

import * as data from '../__data__/TagList.mockdata';

const stories = storiesOf('atoms|TagList', module);

Object.keys(data).forEach((key) => {
    stories.add(key, () => {
        return <TagList {... data[key]} />;
    });
});
