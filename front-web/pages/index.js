import React from 'react'
import Head from 'next/head'

import HeaderWrap from '../components/header-wrap'
import HeaderLogo from '../components/header-logo'
import Banner from '../components/banner'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Home from './home'

import './index.less'

const Website = () => (
  <div style={{ height: '100%', position: 'relative' }}>
    <Head>
      <title>首页</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <HeaderWrap />
    <HeaderLogo />

    <Nav />

    <Banner />
    <Home />
    <Footer />
  </div>
)

export default Website
