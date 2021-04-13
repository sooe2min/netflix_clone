import React from 'react'
import { render } from '@testing-library/react'
import jumboData from '../../fixtures/jumbo.json'
import { Jumbotron } from '../../components'

describe('<Jumbotron /', () => {
  it('renders the <Jumbtron /> with populated data', () => {
    const { container, getByText, getByAltText, getByTestId } = render(
      <Jumbotron.Container>
        {jumboData.map(item => (
          <Jumbotron key={item.id}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt} data-testid={`${item.id}-jumbo-image`} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    )

    expect(getByText('Enjoy on your TV.')).toBeTruthy()
    expect(getByText('Save your data and watch all your favourites offline.')).toBeTruthy()
    expect(getByAltText('Money Heist on Netflix')).toBeTruthy()
    expect(getByTestId('1-jumbo-image')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})