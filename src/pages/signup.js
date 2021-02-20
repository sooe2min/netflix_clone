import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'

export default function Signup() {
  const { firebase } = useContext(FirebaseContext)
  const history = useHistory()

  const [firstName, setFirstName] = useState('')
  const [emailAdress, setEmailAdress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid = firstName === '' || emailAdress === '' || password === ''

  const handleSignup = function (event) {
    event.preventDefault()

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAdress, password)
      .then(result => {
        result.user.updateProfile({
          displayName: { firstName },
          photoURL: Math.floor(Math.random() * 5 + 1)
        })
          .then(() => {
            history.push(ROUTES.BROWSE)
          })
      })
      .catch(error => {
        setFirstName('')
        setEmailAdress('')
        setPassword('')
        setError(error.message)
      })

  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onClick={handleSignup} method='POST'>
            <Form.Input
              placeholder='First name'
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
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
            <Form.Submit disabled={isInvalid} type='submit'>
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix?
            <Form.Link to={ROUTES.SIGN_UP}>Sign in now</Form.Link>
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