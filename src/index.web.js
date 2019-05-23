import React from 'react';
import ReactModal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './components/App';

const rootElement = document.getElementById('root');
const mount = rootElement.hasChildNodes() ? hydrate : render;

ReactModal.setAppElement(rootElement);
mount(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	rootElement,
);
