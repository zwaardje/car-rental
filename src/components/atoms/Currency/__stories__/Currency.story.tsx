import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import Currency from '../Currency';

import {
    defaultProps,
    round,
} from '../__data__/Currency.mockdata';

storiesOf('Atoms|Currency', module)
    .addDecorator(jsxDecorator)
    .add('Default', () => (
        <div>
            <Currency {... defaultProps} />
        </div>
    ))
    .add('Rounded', () => (
        <div>
            <Currency {... round} />
        </div>
    ));
