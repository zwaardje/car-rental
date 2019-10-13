import * as React from 'react';

import Tag from '../Tag';
import { TagList as TagListInterface } from './TagListInterface';

export interface Props extends TagListInterface {}
export interface State {}

export default class TagList extends React.Component<Props, State> {
    static displayName = 'TagList';

    render() {
        const { tags } = this.props;

        return (
            <ul>
                { tags.map((tag, index) => (
                    <Tag key={index} label={tag} />
                ))}
            </ul>
        );
    }
}
