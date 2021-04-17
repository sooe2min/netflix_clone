import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { FirebaseContext } from '../../context/firebase'
import { SignIn } from '../../pages'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({})
}))

describe('<SignIn />', () => {
  it('renders the sign in page with a form submission', async () => {
    const firebase = {
      auth: jest.fn(() => ({
        signInWithEmailAndPassword: jest.fn(() => Promise.resolve('I am signed in!'))
      }))
    }

    const { getByPlaceholderText, getByTestId, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignIn />
        </FirebaseContext.Provider>
      </Router>
    )

    await act(async () => {
      await fireEvent.change(getByPlaceholderText('Email or phone number'), { target: { value: 'jsmsumin2@naver.com' } })
      await fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } })
      fireEvent.click(getByTestId('sign-in'))

      expect(getByPlaceholderText('Email or phone number').value).toBe('jsmsumin2@naver.com')
      expect(getByPlaceholderText('Password').value).toBe('password')
      expect(queryByTestId('error')).toBeFalsy()
    })
  })
})