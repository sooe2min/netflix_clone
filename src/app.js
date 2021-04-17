import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Home, Browse, SignUp, SignIn } from './pages'
import * as ROUTES from './constants/routes'
import { useAuthListener } from './hooks'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'


export default function App() {
  const { user } = useAuthListener()

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
        <SignUp />
      </IsUserRedirect>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
      >
        <SignIn />
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
