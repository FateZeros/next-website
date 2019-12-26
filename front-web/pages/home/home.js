import React, { Component } from 'react'

import styles from './home.less'

const busiConts = [
  {
    id: 1,
    imgName: 'busi1-90.png',
    title: '注册香港公司',
    brief: '本人无需亲自赴港，收费人命币 4,880(包含政府收费)'
  },
  {
    id: 2,
    imgName: 'busi3-90.png',
    title: '注册深圳公司',
    brief: '深圳公司注册仅1,880元起, 小规模企业做账仅150元/月起'
  },
  {
    id: 3,
    imgName: 'busi2-90.png',
    title: '做账审计',
    brief: '本科以上团队，执业CPA把关，仅需3,580元起(含财务及审计)。'
  }
].map(busiItem => {
  busiItem.imgName = `/static/images/${busiItem.imgName}`
  return busiItem
})

class Home extends Component {
  renderBusiness() {
    return (
      <div className={styles.busiCont}>
        <ul className={styles.buisContainer}>
          {busiConts.map(item => {
            return (
              <li key={item.id} className={styles.busiBrief}>
                <img
                  src={item.imgName}
                  alt=""
                  className={styles.busiBriefImg}
                />
                <h2 className={styles.busiBriefTitle}>{item.title}</h2>
                <p className={styles.busiBriefs}>{item.brief}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  render() {
    return <div className={styles.homeCont}>{this.renderBusiness()}</div>
  }
}

export default Home
