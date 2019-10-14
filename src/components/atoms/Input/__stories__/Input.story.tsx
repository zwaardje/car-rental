import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../Input';

import * as props from '../__data__/Input.mockdata';

storiesOf('atoms|Input', module)
    .add('default', () => (
       <Input {... props.defaultProps} />
    ))
    .add('all', () => {
        return Object.keys(props).map((key) => {
            return (
                <Input { ...props[key]} />
            );
        });
    });
