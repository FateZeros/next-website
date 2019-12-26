import React, { Component } from 'react'
import styles from './header-logo.less'

class HeaderLogo extends Component {
  render() {
    return (
      <div className={styles.headerLogo}>
        <div className={styles.logoCont}>
          <img
            src="/static/contact/logo-120.png"
            alt=""
            className={styles.logoImg}
          />
        </div>
        <div className={styles.headerHui}>
          <img src="/static/images/hui-32.png" alt="" />
          <span>快速注册9折优惠</span>
        </div>
      </div>
    )
  }
}

export default HeaderLogo
