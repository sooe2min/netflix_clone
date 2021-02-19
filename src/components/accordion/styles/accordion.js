import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  color: white;
  padding: 70px 45px;
`

export const Item = styled.div`
  margin-bottom: 10px;
  font-size: 26px;

  &:nth-child(6) {
    margin-bottom: 50px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 815px;
`

export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 52px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #303030;
  padding: 22px 52px 22px 32px;
  margin-bottom: 1px;
  user-select: none;
  cursor: pointer;

  img {
    width: 24px;
    filter: brightness(0) invert(1);

    @media (max-width: 600px) {
      width: 16px;
    }
  }
`

export const Body = styled.div`
  background-color: #303030;
  padding: 22px 52px 22px 32px;
  user-select: none;
  white-space: pre-wrap;

  // &.open {
  // }

  // &.close {
  //   display: none;
  // }
`