import React from 'react';
import { storiesOf } from '@storybook/react';

import Tag from '../Tag';

import * as data from '../__data__/Tag.mockdata';

const stories = storiesOf('atoms|Tag', module);

Object.keys(data).forEach((key) => {
    stories.add(key, () => {
        return <Tag {... data[key]} />;
    });
});
