import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ShopGreen from './routes/ShopGreens/ShopGreen';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={ShopGreen} />
        <Route path="/shopGreen" component={ShopGreen} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
