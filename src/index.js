import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from '@/store';
import Router from '@/components/Router';
import initAxios from '@/axios';

initAxios();

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'),
);
