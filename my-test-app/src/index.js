import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentListContainer from './app/container/CommentListContainer';
import registerServiceWorker from './registerServiceWorker';
require('es6-promise').polyfill();
require('isomorphic-fetch');

ReactDOM.render(<CommentListContainer promise={fetch('/response.json')}/>, document.getElementById('root'));
registerServiceWorker();
