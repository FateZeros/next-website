import React, { Component } from 'react'
import styles from './header-wrap.less'

class HeaderWrap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showWechatImg: false
    }
  }

  showWechat = () => {
    this.setState({
      showWechatImg: true
    })
  }

  hideWechat = () => {
    this.setState({
      showWechatImg: false
    })
  }

  render() {
    const { showWechatImg } = this.state

    return (
      <div className={styles.headerWrap}>
        <div className={styles.headerCont}>
          <div className={styles.phoneCont}>
            <img src="/static/images/phone-32.png" alt="" />
            全国统一客服电话：<span>0755 8358 3580</span>
          </div>
          <ul className={styles.otherMedia}>
            <li
              className={styles.mediaCont}
              onMouseOver={this.showWechat}
              onMouseOut={this.hideWechat}
            >
              <img
                src="/static/images/wechat-32.png"
                alt=""
                className={styles.mediaImg}
              />
              官方微信
              {showWechatImg && (
                <div className={styles.weChatImg}>
                  <img src="/static/contact/wechat-100.png" alt="" />
                  <p>欧记商务官方微信</p>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default HeaderWrap
