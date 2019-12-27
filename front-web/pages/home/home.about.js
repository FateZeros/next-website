import React, { Component } from 'react'
import { Tabs, Row, Icon } from 'antd'

import styles from './home.less'

const { TabPane } = Tabs

const aboutImgs = [
  {
    id: 1,
    name: 'aboutImg1.png'
  },
  {
    id: 2,
    name: 'aboutImg2.png'
  }
].map(img => {
  img.url = `/static/images/${img.name}`
  return img
})

/**
 * @description 关于欧记
 */
class HomeAbout extends Component {
  render() {
    return (
      <div className={styles.homeAbout}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutTitle}>
            <strong>关于欧记商务</strong>
          </div>
          <div className={styles.aboutImgCont}>
            {aboutImgs.map(item => (
              <img src={item.url} alt="" />
            ))}
          </div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="商务顾问" key="1">
              <Row className={styles.aboutRow}>
                <h3>欧记商务专业注册公司</h3>
              </Row>
              <Row className={styles.aboutRow}>
                <span>
                  <Icon type="phone" className={styles.aboutRowLeftIcon} />
                  全国咨询电话: 0755-83583580
                </span>
              </Row>
              <Row className={styles.aboutRow}>
                <span>
                  <Icon type="user" className={styles.aboutRowLeftIcon} />
                  江先生：18923837259
                </span>
              </Row>
              <Row className={styles.aboutRow}>
                <span>
                  <Icon type="user" className={styles.aboutRowLeftIcon} />
                  林小姐：18923837259
                </span>
              </Row>
            </TabPane>
            <TabPane tab="公司地址" key="2">
              <Row style={{ marginBottom: 4 }}>香港分部</Row>
              <Row style={{ marginBottom: 4 }}>香港总机</Row>
              <Row style={{ marginBottom: 4 }}>
                <span>
                  深圳总部{' '}
                  <Icon
                    type="environment"
                    className={styles.aboutRowRightIcon}
                  />
                </span>
              </Row>
              <Row style={{ marginBottom: 4 }}>深圳总机</Row>
              <Row style={{ marginBottom: 4 }}>直线：</Row>
              <Row style={{ marginBottom: 4 }}>传真：</Row>
            </TabPane>
            <TabPane tab="付款方式" key="3">
              <Row style={{ marginBottom: 4 }}>银行户名：</Row>
              <Row style={{ marginBottom: 4 }}>开户银行：</Row>
              <Row style={{ marginBottom: 4 }}>银行账户：</Row>
              <Row style={{ marginBottom: 4 }}>备注</Row>
              <Row style={{ marginBottom: 4 }}>外币账户：</Row>
              <Row style={{ marginBottom: 4 }}>外币账户：</Row>
              <Row style={{ marginBottom: 4 }}>NO：</Row>
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default HomeAbout
