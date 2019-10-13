import React from 'react';
import { storiesOf } from '@storybook/react';

import IconLabel from '../IconLabel';

import * as data from '../__data__/IconLabel.mockdata';

const stories = storiesOf('atoms|IconLabel', module);

Object.keys(data).forEach((key) => {
    stories.add(key, () => {
        return <IconLabel {... data[key]} />;
    });
});
