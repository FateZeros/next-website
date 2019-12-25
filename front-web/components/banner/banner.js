import React from 'react'
import ReactSwipe from 'react-swipe'

import styles from './banner.less'

// https://github.com/voronianski/react-swipe

const Banner = () => {
  return (
    <div className={styles.banner}>
      <ReactSwipe
        className="swipe-card"
        swipeOptions={{ continuous: true, auto: 5000, speed: 400 }}
      >
        <div className={styles.slide}>PANE 1</div>
        <div className={styles.slide}>PANE 2</div>
        <div className={styles.slide}>PANE 3</div>
      </ReactSwipe>
    </div>
  )
}

export default Banner
