import React, { Component } from 'react'

import HomeBusi from './home.busi'
import HomeAbout from './home.about'
import HomeNews from './home.news'

import styles from './home.less'

class Home extends Component {
  render() {
    return (
      <div className={styles.homeCont}>
        <HomeBusi />
        <HomeAbout />
        <HomeNews />
      </div>
    )
  }
}

export default Home
