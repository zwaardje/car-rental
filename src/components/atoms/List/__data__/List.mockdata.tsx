import React from 'react';
import { List as ListInterface } from '../ListInterface';

const item = () => {
    return (
        <div>
           Im an item
        </div>
    );
};

export const defaultProps: ListInterface = {
    children: [item, item],
};
