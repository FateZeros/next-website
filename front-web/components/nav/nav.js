import React from 'react'
import Link from 'next/link'

import styles from './nav.less'

const links = [
  { href: 'https://github.com/zeit/next.js', label: '香港公司' },
  { href: 'https://github.com/zeit/next.js', label: '深圳公司' },
  { href: 'https://github.com/zeit/next.js', label: '海外公司' },
  { href: 'https://github.com/zeit/next.js', label: '做账报税' },
  { href: 'https://github.com/zeit/next.js', label: '律师公证' },
  { href: 'https://github.com/zeit/next.js', label: '商标注册' },
  { href: 'https://github.com/zeit/next.js', label: '银行开户' },
  { href: 'https://github.com/zeit/next.js', label: '关于欧记' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav className={styles.navCont}>
    <ul className={styles.linkCont}>
      <li>
        <Link href="/">
          <a>网站首页</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
