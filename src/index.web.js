import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
const hydrateOrRender = rootElement.hasChildNodes() ? hydrate : render;

hydrateOrRender(<App />, rootElement);
