import React, { Component } from 'react'
import { Tabs, Row, Icon } from 'antd'

const { TabPane } = Tabs

import styles from './home.less'

const news1 = [
  {
    id: 1,
    news: '香港公司注册，香港公司包开户'
  },
  {
    id: 2,
    news: '注册香港公司的好处'
  },
  {
    id: 3,
    news: '内地人注册香港公司的好处'
  },
  {
    id: 4,
    news: '注册一家香港公司最适合做什么业务'
  },
  {
    id: 5,
    news: '完成注册香港离岸公司可以在大陆经营吗'
  },
  {
    id: 6,
    news: '什么企业适合注册香港公司'
  }
]

class HomeNews extends Component {
  render() {
    return (
      <div className={styles.homeNews}>
        <div className={styles.newsContainer}>
          <div className={styles.newsTitle}>新闻中心</div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="注册香港公司" key="1">
              {news1.map(item => {
                return (
                  <Row className={styles.newsRow} key={item.id}>
                    <span>
                      <Icon
                        type="caret-right"
                        className={styles.newsRowLeftIcon}
                      />
                      {item.news}
                    </span>
                  </Row>
                )
              })}
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
