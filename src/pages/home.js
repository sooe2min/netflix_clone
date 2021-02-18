import React from 'react'
import { HeaderContainer } from '../containers/header'
import { JumbotronContainer } from '../containers/jumbotron'
import { FaqsContainer } from '../containers/accordion'
import { FooterContainer } from '../containers/footer'
import { Feature, OptForm } from '../components'

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your membership.
            </OptForm.Text>
            <OptForm.Input placeholder='Email address' />
            <OptForm.Button>Get Started</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}