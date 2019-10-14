import * as React from 'react';

import { Image as ImageInterface } from './ImageInterface';

export interface Props extends ImageInterface {}
export interface State {}

export default class Image extends React.Component<Props, State> {
    static displayName = 'Image';

    render() {
        const { url, className } = this.props;

        return (
            <img src={url} className={`image ${className ? ` ${className}` : ''}`} />
        );
    }
}
