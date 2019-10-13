import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from '../Icon';

import { IconTypes } from '../IconInterface';

import {
    iconList,
} from '../__data__/Icon.mockdata';

const storyContainer = {
    display: 'flex',
    'max-width': '500px',
    'flex-wrap': 'wrap',
};
const iconContainer = {
    display: 'flex',
    padding: '20px',
    border: '1px solid #dadada',
    margin: '5px',
    'justify-content': 'center',
    'align-items': 'center',
    width: '50px',
    'flex-direction': 'column',
};

const iconName = {
    fontSize: '10px',
    display:'block',
    'margin-top': '10px',
    'text-align':'center',
};

storiesOf('Atoms|Icons', module)
    .add('Icon', () => (
        <div style={storyContainer}>
            {iconList.map((icon: IconTypes) => (

                    <div style={iconContainer}>
                        <Icon icon={icon} />
                        <span style={iconName}>
                            {icon}
                        </span>
                    </div>
            ))}
        </div>
    ));
