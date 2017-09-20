import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from '@/store';
import Index from '@/components/page/Index';
import NotFound from '@/components/page/NotFound';

const history = syncHistoryWithStore(browserHistory, store);

export default function App() {
  return (
    <Router history={history}>
      <Route path="/" component={Index} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}
