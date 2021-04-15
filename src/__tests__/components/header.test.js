import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Header } from '../../components'
import { MemoryRouter } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import logo from '../../logo.svg'

describe('<Header />', () => {
  it('renders the basic <Header /> with a background', () => {
    const { container, getByText, queryByTestId } = render(
      <Header>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt='NetFlix' />
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
          <Header.TextLink
            active="true"
            onClick={() => { }}>
            I am a link!
            </Header.TextLink>
        </Header.Frame>
      </Header>
      , { wrapper: MemoryRouter }
    )

    expect(getByText('I am a link!')).toBeTruthy()
    expect(queryByTestId('header-bg')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders the basic <Header /> without a background', () => {
    const { container, getByText, queryByTestId } = render(
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt='NetFlix' />
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
          <Header.TextLink
            active="true"
            onClick={() => { }}>
            I am a link!
            </Header.TextLink>
        </Header.Frame>
      </Header>
      , { wrapper: MemoryRouter }
    )

    expect(getByText('I am a link!')).toBeTruthy()
    expect(queryByTestId('header-bg')).toBeFalsy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders the full <Header /> with a background', () => {
    const { container, getByTestId, getByText } = render(
      <Header src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt='NetFlix' />
            <Header.TextLink
              active={false}
              onClick={() => { }}>
              Series
            </Header.TextLink>
            <Header.TextLink
              active
              onClick={() => { }}>
              Films
            </Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Profile>
              <Header.Search
                searchTurm="Joker"
                setSearchTurm={() => { }}
              />
              <Header.Picture src="/images/soomin.png" />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src="/images/soomin.png" />
                  <Header.TextLink>Soomin Jang</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => { }}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd ..
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      , { wrapper: MemoryRouter }
    )

    expect(getByTestId('search-input')).toBeTruthy()
    expect(getByTestId('search-input').value).toBe('Joker')
    fireEvent.change(getByTestId('search-input'), { target: { value: 'Simpsons' } })
    fireEvent.click(getByTestId('search-click'))

    expect(getByText('Series')).toBeTruthy()
    expect(getByText('Films')).toBeTruthy()
    expect(getByText('Soomin Jang')).toBeTruthy()
    expect(getByText('Sign out')).toBeTruthy()
    expect(getByText('Watch Joker Now')).toBeTruthy()
    expect(getByText('Forever alone in a crowd ..')).toBeTruthy()
    expect(getByText('Play')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})