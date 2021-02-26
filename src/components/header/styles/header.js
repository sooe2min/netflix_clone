import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  background: url(${({ src }) =>
    src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
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
  margin-right: 40px;

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

export const Group = styled.div`
  display: flex;
  align-items: center;
`

export const Link = styled.p`
  color: #fff;
  margin-right: 30px;
  cursor: pointer;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')}

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
  `

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  width: 32px;
  height: 32px;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
`

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 37px;
  right: 0;
  width: 110px;
  background-color: black;
  padding: 10px;

  button {
    margin-right: 10px;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Picture}, ${Link} {
      cursor: default;
    }

    p {
      margin: 0;
      font-size: 12px;
    }
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`



export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1000px) {
    display: none;
  }
`

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  margin-bottom: 20px;
`

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`