import React, { Component } from 'react'

import styles from './home.less'

const feeDetails = [
  {
    id: 1,
    feeImg: 'fee-serve1.png',
    feeDetail: '提供身份证复印件，6个工作日办完',
    fee: '4880元全包'
  },
  {
    id: 2,
    feeImg: 'fee-serve2.png',
    feeDetail: '提供身份证复印件，6个工作日办完',
    fee: '980元全包'
  },
  {
    id: 3,
    feeImg: 'fee-serve3.png',
    feeDetail: '提供身份证复印件，6个工作日办完',
    fee: '2600元/个'
  },
  {
    id: 4,
    feeImg: 'fee-serve4.png',
    feeDetail: '提供身份证复印件，6个工作日办完',
    fee: '1500元/个'
  },
  {
    id: 5,
    feeImg: 'fee-serve5.png',
    feeDetail: '提供身份证复印件，6个工作日办完',
    fee: '4880元全包'
  }
].map(img => {
  img.feeImg = `/static/contact/${img.feeImg}`
  return img
})

class HomeFee extends Component {
  render() {
    return (
      <div className={styles.homeFee}>
        <div className={styles.feeContainer}>
          <div className={styles.feeTitle}>
            <strong>一站式注册服务</strong>
          </div>
          <div className={styles.feeTips}>
            <img src="/static/images/feeImg1-32.png" alt="" />
            欧记商务提醒您不要过分追求低价服务，以防受骗，最终导致政府罚款、吊销执照。
          </div>
          <ul className={styles.feeDetails}>
            {feeDetails.map(item => {
              return (
                <li key={item.id} className={styles.feeItem}>
                  <img src={item.feeImg} />
                  <p className={styles.feeItemDetail}>{item.feeDetail}</p>
                  <p className={styles.feeItemFee}>{item.fee}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default HomeFee
