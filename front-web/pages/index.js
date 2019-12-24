import React from 'react'
import Head from 'next/head'

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

    <Nav />

    <Home />

    <Footer />
  </div>
)

export default Website
