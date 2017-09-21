import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from '@/store';
import Index from '@/components/page/Index';
import User from '@/components/page/User';
import NotFound from '@/components/page/NotFound';

const history = syncHistoryWithStore(browserHistory, store);

export default function AppRouter() {
  return (
    <Router history={history}>
      <Route path="/" component={Index} />
      <Route path="/user/:id" component={User} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}
