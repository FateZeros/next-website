import React from 'react'
import Link from 'next/link'

import styles from './nav.less'

const links = [
  { href: '/', label: '香港公司' },
  { href: '/', label: '深圳公司' },
  { href: '/', label: '海外公司' },
  { href: '/', label: '做账报税' },
  { href: '/', label: '律师公证' },
  { href: '/', label: '商标注册' },
  { href: '/', label: '银行开户' },
  { href: '/', label: '关于欧记' }
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
