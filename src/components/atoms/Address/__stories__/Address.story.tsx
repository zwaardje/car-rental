import React from 'react';
import { storiesOf } from '@storybook/react';

import Address from '../Address';

import * as data from '../__data__/Address.mockdata';

const stories = storiesOf('atoms|Address', module);

Object.keys(data).forEach((key) => {
    stories.add(key, () => {
        return <Address {... data[key]} />;
    });
});
