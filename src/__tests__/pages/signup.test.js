import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { FirebaseContext } from '../../context/firebase'
import { SignUp } from '../../pages'
// import { act } from 'react-dom/test-utils'

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: () => ({})
}))

describe('<SignUp />', () => {
	it('renders the sign up page with a form submission', async () => {
		const firebase = {
			auth: jest.fn(() => ({
				createUserWithEmailAndPassword: jest.fn(() =>
					Promise.resolve({
						user: {
							updateProfile: jest.fn(() =>
								Promise.resolve('I am signed up!')
							)
						}
					})
				)
			}))
		}

		const { getByPlaceholderText, getByTestId, queryByTestId } = render(
			<Router>
				<FirebaseContext.Provider value={{ firebase }}>
					<SignUp />
				</FirebaseContext.Provider>
			</Router>
		)

		await waitFor(async () => {
			await fireEvent.change(getByPlaceholderText('First name'), {
				target: { value: 'Soomin' }
			})
			await fireEvent.change(
				getByPlaceholderText('Email or phone number'),
				{ target: { value: 'jsmsumin2@naver.com' } }
			)
			await fireEvent.change(getByPlaceholderText('Password'), {
				target: { value: 'password' }
			})
			fireEvent.click(getByTestId('sign-up'))

			expect(getByPlaceholderText('First name').value).toBe('Soomin')
			expect(getByPlaceholderText('Email or phone number').value).toBe(
				'jsmsumin2@naver.com'
			)
			expect(getByPlaceholderText('Password').value).toBe('password')
			expect(queryByTestId('error')).toBeFalsy()
		})
	})
})
