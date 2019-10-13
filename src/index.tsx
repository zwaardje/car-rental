import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { I18nextProvider } from 'react-i18next';
import i18n, { config } from './i18next';
import svg4everybody from 'svg4everybody';

import App from './App';
import configureStore from './store';

import './style/index.scss';

svg4everybody();
// tslint:disable-next-line
const __svg__ = {
    path: './static/icons/*.svg',
    name: 'static/icons/iconset.svg',
};

require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

const store = configureStore();

const loadApplication = async () => {
    await i18n.init(config);

    ReactDOM.render(
        <React.Suspense fallback={<p>Loading</p>}>
            <I18nextProvider i18n={i18n}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </I18nextProvider>
        </React.Suspense>
    ,   document.getElementById('app'));
};

loadApplication();
