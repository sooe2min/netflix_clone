import React from 'react'
import { Container, Title, Row, Column, Link, Select, Text, Copy, Break } from './styles/footer'

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>
}

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

Footer.Select = function FooterSelect({ children, ...restProps }) {
  return <Select {...restProps}>{children}</Select>
}

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Footer.Copy = function FooterCopy({ children, ...restProps }) {
  return <Copy {...restProps}>{children}</Copy>
}

Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>
}
