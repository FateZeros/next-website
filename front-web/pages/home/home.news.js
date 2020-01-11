import React, { Component } from 'react'
import { Tabs } from 'antd'

const { TabPane } = Tabs

import styles from './home.less'

class HomeNews extends Component {
  render() {
    return (
      <div className={styles.homeNews}>
        <div className={styles.newsContainer}>
          <div className={styles.newsTitle}>新闻中心</div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="注册香港公司" key="1">
              1111
            </TabPane>
            <TabPane tab="香港公司年审" key="2">
              1111
            </TabPane>
            <TabPane tab="香港公司审计" key="3">
              1111
            </TabPane>
            <TabPane tab="注册香港公司" key="4">
              1111
            </TabPane>
            <TabPane tab="深圳公司代理记账" key="5">
              1111
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default HomeNews
