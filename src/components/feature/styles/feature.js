import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  padding: 165px 45px;
`

export const Title = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: 700;
  margin: auto;
  max-width: 650px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
    // padding: 0 10%;
  }
`

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: 500;
  margin: 16px auto;
  max-width: 640px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 18px;
    // padding: 0 10%;
  }
`