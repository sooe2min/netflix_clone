import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Browse, Signup, Signin } from './pages'
import * as ROUTES from './constants/routes'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'

export default function App() {
  const user = null
  // const { user, setUser } = useState()

  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
        exact
      >
        <Home />
      </IsUserRedirect>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
      >
        <Signup />
      </IsUserRedirect>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
      >
        <Signin />
      </IsUserRedirect>

      <ProtectedRoute
        user={user}
        path={ROUTES.BROWSE}
      >
        <Browse />
      </ProtectedRoute>
    </Router>
  )
}
