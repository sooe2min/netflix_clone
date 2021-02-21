import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.75);
  max-width: 450px;
  min-height: 660px;
  box-sizing: border-box;
  padding: 60px 68px 40px;
  margin: auto;
  margin-bottom: 90px;
`

export const Base = styled.form`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  color: #fff;
  margin-bottom: 28px;
  font-size: 32px;  
  font-weight: 700;
`

export const Error = styled.div`
  background: #e87c03;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`

export const Input = styled.input`
  margin-bottom: 16px;
  background-color: rgb(51, 51, 51);
  padding: 8px 20px 0px;
  border-radius: 4px;
  border: 0;
  width: 314px;
  height: 50px;
  box-sizing: border-box;
  color: white;

  &:focus {
    outline: none;
  }
`

export const Submit = styled.button`
  background: rgb(229, 9, 20);
  border: 0;
  color: white;
  font-size: 16px;
  font-weight: 700;
  padding: 16px;
  cursor: pointer;
  min-height: 37px;
  min-width: 98px;
  margin: 25px 0 20px;
  border-radius: 4px;

  &:disabled {
    opacity: 0.5;
  }
`

export const Link = styled(ReactRouterLink)`
  color: white;
  padding-left: 5px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  margin-top: 16px;
  color: #737373;
`

export const TextSmall = styled.p`
  font-size: 13px;
  color: #8c8c8c;
`