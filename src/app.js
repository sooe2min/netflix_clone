import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Browse, Signup, Signin } from './pages'
import * as ROUTES from './constants/routes'

export default function App() {
  return (
    <Router>
      {/* <Switch> */}
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
      <Route path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      {/* </Switch> */}
    </Router>
  );
}
