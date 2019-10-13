import React from 'react';
import { hot } from 'react-hot-loader';

import Template from './components/templates/Template';

export interface State {
    loaded: boolean;
}
export interface Props {}

export class App extends React.Component<Props, State> {

    state = {
        loaded: true,
    };

    render() {
        const { loaded } = this.state;

        if (loaded) {
            return (
                <Template />
            );
        }

        return (
            <div>
                The application is loading.
            </div>
        );
    }
}

export default hot(module)(App);
