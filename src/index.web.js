import React from 'react';
import ReactGA from 'react-ga';
import { hydrate, render } from 'react-dom';

import './index.css';
import App from './components/App';

const rootElement = document.querySelector('#root');
const mount = rootElement.hasChildNodes() ? hydrate : render;

mount(
	<App />,
	rootElement
);

if (process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID) {
	ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
	ReactGA.pageview(window.location.pathname + window.location.search);
}
