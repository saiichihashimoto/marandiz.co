import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './components/App';

const rootElement = document.querySelector('#root');
const mount = rootElement.hasChildNodes() ? hydrate : render;

mount(
	<App />,
	rootElement,
);
