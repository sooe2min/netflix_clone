import selectionFilter from '../../utils/selection-filter'

test('selectionFilter with legitimate data', () => {
  const series = [
    {
      id: "afb24be5-ede5-4d25-9096-3be4f2487157",
      title: 'Tiger King',
      description: 'An exploration of big cat breeding ..',
      genre: 'documentaries',
      maturity: '18',
      slug: 'tiger-king'
    }
  ]

  const films = [
    {
      id: "7c1fcc7d-6284-4d07-b974-77b28422f179",
      title: 'The Prestige',
      description:
        'Two friends and fellow magicians become bitter enemies after a sudden tragedy.',
      genre: 'drama',
      maturity: '15',
      slug: 'the-prestige'
    }
  ]

  const slides = selectionFilter({ series, films })
  expect(slides.series[0].title).toBe('Documentaries')
  expect(slides.series[0].data[0].title).toBe('Tiger King')
  expect(slides.series[0].data[0].description).toBe('An exploration of big cat breeding ..')
  expect(slides.series[0].data[0].genre).toBe('documentaries')
  expect(slides.series[0].data[0].maturity).toBe('18')
  expect(slides.series[0].data[0].slug).toBe('tiger-king')

  expect(slides.films[0].title).toBe('Drama')
  expect(slides.films[0].data[0].title).toBe('The Prestige')
  expect(slides.films[0].data[0].description).toBe('Two friends and fellow magicians become bitter enemies after a sudden tragedy.')
  expect(slides.films[0].data[0].genre).toBe('drama')
  expect(slides.films[0].data[0].maturity).toBe('15')
  expect(slides.films[0].data[0].slug).toBe('the-prestige')
})

test('selectionFilter with no data', () => {
  const slides = selectionFilter()
  expect(slides.series[0].title).toBe('Documentaries')
  expect(slides.series[0].data).toBe(undefined)
  expect(slides.films[0].title).toBe('Drama')
  expect(slides.films[0].data).toBe(undefined)
})