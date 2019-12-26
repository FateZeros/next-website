import React from 'react'
import ReactSwipe from 'react-swipe'

import styles from './banner.less'

// https://github.com/voronianski/react-swipe

const banners = [
  'banner1.png',
  'banner2.png',
  'banner3.png',
  'banner4.png',
  'banner5.png'
].map(banner => {
  banner = `/static/images/${banner}`
  return banner
})

const Banner = () => {
  return (
    <div className={styles.banner}>
      <ReactSwipe
        className="swipe-card"
        swipeOptions={{ continuous: true, auto: 5000, speed: 400 }}
      >
        {banners.map(item => (
          <div className={styles.slide}>
            <img src={item} alt="" />
          </div>
        ))}
      </ReactSwipe>
    </div>
  )
}

export default Banner
