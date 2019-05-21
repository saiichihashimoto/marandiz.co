import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './components/App';

const rootElement = document.getElementById('root');
const googleSheets = JSON.parse(document.getElementById('googleSheets').innerHTML);
const mount = rootElement.hasChildNodes() ? hydrate : render;

mount(<App googleSheets={googleSheets} />, rootElement);
