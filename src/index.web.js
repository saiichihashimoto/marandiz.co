import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './components/App';

const rootElement = document.getElementById('root');
const googleSheets = JSON.parse(document.getElementById('googleSheets').innerHTML);
const hydrateOrRender = rootElement.hasChildNodes() ? hydrate : render;

hydrateOrRender(<App googleSheets={googleSheets} />, rootElement);
