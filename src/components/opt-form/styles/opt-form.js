import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  height: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Text = styled.p`
  font-size: 18px;
  display: flex;
  margin-top: 50px;

  @media (max-width: 1000px) {
    font-size: 24px;
    padding: 0 80px;
    margin: 24px auto;
    max-width: 450px;
    text-align: center;
  }
`

export const Input = styled.input`
  max-width: 520px;
  width: 100%;
  border: 0;
  height: 70px;
  padding: 10px;
  box-sizing: border-box;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: #e50914;
  border: 0;
  font-size: 26px;
  color: white;
  cursor: pointer;
  // text-transform: uppercase;
  padding: 0 26px;

  @media (max-width: 1000px) {
    height: 40px;
    font-size: 1rem;
    margin-top: 15px;
  }

  img {
    width: 20px;
    padding-left: 10px;
    filter: brightness(0) invert(1);
  
    @media (max-width: 1000px) {
      width: 11px;
    }
  }

  &:hover {
    background: #f40612;
  }
`

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`
