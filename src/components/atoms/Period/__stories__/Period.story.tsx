import React from 'react';
import { storiesOf } from '@storybook/react';

import Period from '../Period';

import  * as data from '../__data__/Period.mockdata';

const stories = storiesOf('atoms|Period', module);

Object.keys(data).forEach((key) => {
    stories.add(key, () => {
        const props = data[key];
        return <Period {... props} />;
    });
});
