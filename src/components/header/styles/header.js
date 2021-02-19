import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  background: url(${({ src }) =>
    src ? '../images/misc/$({src}).jpg' : '../images/misc/home-bg.jpg'})
    top left / cover no-repeat; 
`

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    margin: 0 45px;
}
`

export const Frame = styled.div`
`

export const Logo = styled.img`
  width: 165px;
  padding-top: 8px;

  @media (max-width: 1450px) {
    width: 135px;
  }
`

export const ButtonLink = styled(ReactRouterLink)`
  background: #e50914;
  color: white;
  width: 84px;
  height: fit-content;
  border-radius: 3px;
  font-size: 16px;
  padding: 8px 17px;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`

