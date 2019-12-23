import React from 'react'
import Head from 'next/head'

import Nav from '../components/nav/'
import Home from './home'

const Website = () => (
  <div>
    <Head>
      <title>首页</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <Home />
  </div>
)

export default Website
