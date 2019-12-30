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
            <strong>欧记商务</strong>
          </div>
          <div className={styles.aboutImgCont}>
            {aboutImgs.map(item => (
              <img src={item.url} alt="" key={item.id} />
            ))}
          </div>
          <div className={styles.aboutCompany}>
            <div className={styles.aboutCompanyFont}>
              <p>
                深圳市欧记商务有限公司是深圳注册香港公司和注册深圳本地公司的权威代理机构，提供多元化服务的专业公司，
                为客户提供注册香港公司内地深圳公司及海外公司、注册国内外商标、申请国际书刊号、开设离岸帐号、公司年审、报税、
                安排核数审计、变更转让、以及商务秘书等服务,同时提供域名注册、虚拟主机、网站建设、网站推广等服务，
                尤其为客户提供香港域名主机服务。
              </p>
              <p>
                司位于人流密集的商业区，邻近地铁站，交通方便，邻近各大主要公共交通网络。毗邻银行，食肆，大型购物中心及各行业商铺，
                给贵公司提供了一个方便快捷的商业中心点。已经注册香港公司超过万家，已有十多年商务注册经验，专业从事香港及国内外公司注册，
                特有一站式注册服务，让您注册的放心， 管理的省心。
              </p>
            </div>
            <div className={styles.aboutCompanyImg}>
              <img src="/static/images/aboutImg3.png" alt="" />
            </div>
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
