import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'

export default function SignIn() {
  const { firebase } = useContext(FirebaseContext)
  const history = useHistory()

  const [emailAdress, setEmailAdress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid = emailAdress === '' || password === ''

  const handleSignIn = (event) => {
    event.preventDefault()

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAdress, password)
      .then(() => {
        history.push(ROUTES.BROWSE)
      })
      .catch(error => {
        setEmailAdress('')
        setPassword('')
        setError(error.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method='POST'>
            <Form.Input
              placeholder='Email or phone number'
              value={emailAdress}
              onChange={({ target }) => setEmailAdress(target.value)}
            />
            <Form.Input
              type='password'
              autoComplete='off'
              placeholder='Password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type='submit' data-testid="sign-in">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix?
            <Form.Link to={ROUTES.SIGN_UP}>Sign up now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}