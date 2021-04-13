import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Card, Player } from '../../components'

const category = 'series'
const slideRows = [
  {
    title: 'Documentaries',
    data: [
      {
        id: '07adcf19-517f-41b4-8f8b-04fee694bce1',
        title: 'Tiger King',
        description: 'Tiger King description',
        genre: 'documentaries',
        maturity: '18',
        slug: 'tiger-king',
        docId: 'IcRxJBanzE7nmIp2GMGb'
      }
    ]
  },
  {
    title: 'Children',
    data: [
      {
        id: 'a938b5a6-fe25-4a06-8050-353bc7146ccd',
        title: 'Hotel Transylvania',
        description: 'Hotel Transylvania description',
        genre: 'children',
        maturity: '0',
        slug: 'hotel-transylvania',
        docId: '4JDgdf5vE0K3YrW9ZnbP'
      }
    ]
  }
]

describe('<Card />', () => {
  it('renders the <Card /> with populated data', () => {
    const { container, getByText } = render(
      <Card.Group>
        {slideRows.map(slideItem => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map(item => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src='/videos/bunny.mp4' />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    )

    expect(getByText('Documentaries')).toBeTruthy()
    expect(getByText('Tiger King')).toBeTruthy()
    expect(getByText('Tiger King description')).toBeTruthy()

    expect(getByText('Children')).toBeTruthy()
    expect(getByText('Hotel Transylvania')).toBeTruthy()
    expect(getByText('Hotel Transylvania description')).toBeTruthy()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders the <Card /> with and clicks the card feature', () => {
    const { container, queryByText, getByTestId, getByAltText } = render(
      <Card.Group>
        {slideRows.map(slideItem => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map(item => (
                <Card.Item key={item.docId} item={item} data-testid={`${item.slug}-testid`}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src='/videos/bunny.mp4' />
              </Player>
            </Card.Feature>
          </Card>
        ))
        }
      </Card.Group >
    )

    expect(queryByText('18')).toBeFalsy()
    fireEvent.click(getByTestId('tiger-king-testid'))
    expect(queryByText('18')).toBeTruthy()

    fireEvent.click(getByAltText('Close'))
    expect(queryByText('18')).toBeFalsy()

    expect(queryByText('PG')).toBeFalsy()
    fireEvent.click(getByTestId('hotel-transylvania-testid'))
    expect(queryByText('PG')).toBeTruthy()

    fireEvent.click(getByAltText('Close'))
    expect(queryByText('PG')).toBeFalsy()

    expect(container.firstChild).toMatchSnapshot()
  })
})
