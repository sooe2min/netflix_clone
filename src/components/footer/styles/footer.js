import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: Column;
  max-width: 1000px;
  margin: auto;
  width: 100%;
  padding: 70px 45px 20px 45px;
  color: #757575;

  @media (max-width: 600px) {
    padding: 0 10%;
  }
`

export const Title = styled.div`
  font-size: 1em;
  margin: 0px 40px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 210px));
  grid-gap: 12px;
  margin: 0px 40px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: Column;
`

export const Link = styled.a`
  font-size: 13px;
  color: #757575;
  text-decoration: none;
  margin-bottom: 16px;
`

export const Select = styled.select`
  width: 132px;
  background-color: black;
  color: #999;
  font-size: 16px;
  padding: 12px 26px 12px 30px;
  margin: 20px 40px 0px 40px;
  margin-top: 20px
`

export const Text = styled.div`
  margin: 23px 40px 0px 40px;
  font-size: 14px;
`

export const Copy = styled.div`
  font-size: 14px;
  margin: 0px 40px;
`

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;  
`