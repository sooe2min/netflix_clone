import React, { useState, createContext, useContext } from 'react'
import { Container, Inner, Item, Title, Header, Body } from './styles/accordion'

// 콘텍스트 객체를 만든다. 앞으로 Provider로부터 현재값을 읽을 수 있다.
const ToggleContext = createContext()

export default function Accordion({ children, ...restProps }) {
  return (
    < Container {...restProps}>
      <Inner>
        {children}
      </Inner>
    </Container >
  )
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  // 현재 state 값과 이 값을 업데이트하는 함수를 선언한다.
  const [toggleShow, setToggleShow] = useState(false)

  // Context.Provider를 이용해서 하위 컴포넌트에게 value prop을 제공한다.
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}


Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  // Context를 가져온다.
  const { toggleShow, setToggleShow } = useContext(ToggleContext)

  // Header를 클릭하면 toggleShow 값이 바뀐다. 그리고 값에 따라 이미지가 변경된다.
  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt='close' />
      ) : (
          <img src="/images/icons/add.png" alt="Open" />
        )}
    </Header>
  )
}

// togglwShow 값에 따라 className을 변경한다.
Accordion.Body = function AccordionBody({ children, ...restProps }) {
  // Context를 가져온다.
  const { toggleShow } = useContext(ToggleContext)

  return toggleShow ? <Body {...restProps}>{children}</Body> : null

  // return (
  //   <Body className={toggleShow ? 'open' : 'close'} {...restProps}>
  //     { children}
  //     {/* <ToggleContext.Consumer>
  //       {value => console.log(value)}
  //     </ToggleContext.Consumer> */}
  //   </Body >
  // )
}