import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import exampleData from "./exampleData";

ReactDOM.render(<App data={exampleData} />, document.getElementById('root'));
registerServiceWorker();
 