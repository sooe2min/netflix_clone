import React from 'react'
import { JumbotronContainer } from '../containers/jumbotron'
import { FaqsContainer } from '../containers/accordion'
import { FooterContainer } from '../containers/footer'

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}