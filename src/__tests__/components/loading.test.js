import React from 'react'
import { render } from '@testing-library/react'
import { Loading } from '../../components'

describe('<Loading />', () => {
  it('renders the <Loading /> with populated data', () => {
    const { container, getByTestId, getByRole } = render(
      <Loading src="/images/soomin.png" data-testid="loading" />
    )

    expect(getByTestId('loading')).toBeTruthy()
    expect(getByTestId('loading-picture')).toBeTruthy()
    expect(getByRole('img')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders the <ReleaseBody />', () => {
    const { container } = render(
      <Loading.ReleaseBody data-testid="loading" />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})