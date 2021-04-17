import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { SelectProfileContainer } from '../../containers/profiles'
import { MemoryRouter } from 'react-router-dom'

describe('<Profiles />', () => {
  it('renders the <Profiles />', () => {
    const user = { displayName: 'Soomin', photoURL: 'profile.png' }
    const setProfile = jest.fn()
    const { getByTestId } = render(
      <SelectProfileContainer user={user} setProfile={setProfile} />
      , { wrapper: MemoryRouter }
    )

    fireEvent.click(getByTestId('user-profile'))
    expect(setProfile).toHaveBeenCalled()
  })
})

