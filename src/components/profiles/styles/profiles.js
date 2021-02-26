import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 80%;
`

export const Title = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px soild black;
  cursor: pointer;
`

export const Name = styled.p`
  color: #808080;
  font-size: 16px;
  text-overflow: ellipsis;
`

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 25px;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover ${Name} {
    font-wieght: bold;
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`