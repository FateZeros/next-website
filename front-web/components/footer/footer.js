import React, { Component } from 'react'

import styles from './footer.less'

const footerImgs = [
  {
    id: 1,
    name: 'footer1-54.png',
    info: '0755-8358-3580'
  },
  {
    id: 2,
    name: 'footer2-54.png',
    info: '高安全保障'
  },
  {
    id: 3,
    name: 'footer3-54.png',
    info: '高效的团队'
  }
].map(img => {
  img.url = `/static/images/${img.name}`
  return img
})

const links = {
  1: [
    {
      id: 1,
      name: '欧记主营业务'
    },
    {
      id: 2,
      name: '注册香港公司'
    },
    {
      id: 3,
      name: '注册香港公司'
    },
    {
      id: 4,
      name: '注册香港公司'
    }
  ],
  2: [
    {
      id: 1,
      name: '有关欧记商务'
    },
    {
      id: 2,
      name: '有关欧记商务'
    },
    {
      id: 3,
      name: '有关欧记商务'
    },
    {
      id: 4,
      name: '有关欧记商务'
    }
  ],
  3: [
    {
      id: 1,
      name: '有关欧记商务'
    },
    {
      id: 2,
      name: '有关欧记商务'
    },
    {
      id: 3,
      name: '有关欧记商务'
    },
    {
      id: 4,
      name: '有关欧记商务'
    }
  ]
}

class Footer extends Component {
  renderFooterImg() {
    return (
      <ul className={styles.footerImgs}>
        {footerImgs.map(item => {
          return (
            <li key={item.id} className={styles.footerImg}>
              <img src={item.url} alt="" className={styles.footerItemImg} />
              {item.info}
            </li>
          )
        })}
      </ul>
    )
  }

  renderFirendLinks(id) {
    return (
      <ul className={styles.links}>
        {links[id].map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    )
  }

  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          {this.renderFooterImg()}
          <div className={styles.friendLinkCont}>
            <div className={styles.friendLinks}>
              {this.renderFirendLinks(1)}
              {this.renderFirendLinks(2)}
              {this.renderFirendLinks(3)}
            </div>
            <div className={styles.wechatImg}>
              <img src="/static/contact/wechat-100.png" alt="" />
            </div>
          </div>
          <div className={styles.copyRight}>
            <p>CopyRight©2019</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
