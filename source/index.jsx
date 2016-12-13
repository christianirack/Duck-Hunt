import React from 'react';
import ReactDOM from 'react-dom';
/* Import */
import App from './modules/App.jsx';
import './scss/App.scss';
/* Import */
var dir = __dirname;
var isProduction = process.env.NODE_ENV === 'production';
if (!isProduction) {
}
/* Embed componente */
ReactDOM.render(<App />, document.getElementById('app'));