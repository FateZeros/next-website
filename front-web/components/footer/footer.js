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

  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          {this.renderFooterImg()}
          <div className={styles.copyRight}>
            <p>CopyRight©2019</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
