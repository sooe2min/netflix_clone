import React from 'react'
import { Footer } from '../components'

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Call 00-308-321-0161</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Investor Relations</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Help Center</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Legal Notices</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Ways to Watch</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
          <Footer.Link href="#">Netflix Originals</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Media Center</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Select>
        <option>English</option>
        <option>한국어</option>
      </Footer.Select>
      <Footer.Text>Netflix South Korea</Footer.Text>
      <Footer.Copy>
        <div>Netflix Services Korea Ltd. E-Commerce Registration Number: Je 2018-Seoul Jong-ro-0426 Ho. Phone: 00-308-321-0161</div>
        <div>Representative: Reginald Shawn Thompson</div>
        <div>Email: korea@netflix.com</div>
        <div>Address: 20F, Tower A, Centropolis Building 26, Ujeongguk-ro, Jongno-gu, Seoul, 03161 Republic of Korea</div>
        <div>Hosted by: Amazon Web Services Inc.</div>
        <a href="https://www.ftc.go.kr/www/bizCommView.do?key=232&apv_perm_no=2018300016930200431&pageUnit=10&searchCnd=bup_nm&searchKrwd=%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4&pageIndex=1">Link to KFTC website</a>
      </Footer.Copy>
    </Footer >
  )
}