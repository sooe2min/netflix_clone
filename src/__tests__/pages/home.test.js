import React from 'react'
import { render } from '@testing-library/react'
import { Home } from '../../pages'
import { MemoryRouter } from 'react-router-dom'

test('redners the homepage', () => {
  const { getByText, getAllByText, getAllByPlaceholderText } = render(
    <Home />
    , { wrapper: MemoryRouter }
  )

  expect(getByText('Unlimited movies, TV shows, and more.')).toBeTruthy()
  expect(getByText('Watch anywhere. Cancel anytime.')).toBeTruthy()
  expect(getAllByText('Ready to watch? Enter your email to create or restart your membership.')).toBeTruthy()
  expect(getAllByPlaceholderText('Email address')).toBeTruthy()
  expect(getAllByText('Get Started')).toBeTruthy()
})