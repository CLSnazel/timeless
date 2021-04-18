import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import App from 'components/App';

import 'theme/index.css'

smoothScrollPolyfill.polyfill();

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
