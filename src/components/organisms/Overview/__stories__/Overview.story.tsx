import React from 'react';
import { storiesOf } from '@storybook/react';

import Overview from '../Overview';

import * as data from '../__data__/Overview.mockdata';

const stories = storiesOf('organisms|Overview', module);

Object.keys(data).forEach((key) => {
    stories.add(key, () => {
        return <Overview {... data[key]} />;
    });
});
