import React from 'react'
import styles from '@/app/page.module.css'

const Header = () => {
  return (
    <div className={styles.title}>
        <div className={styles.d_flex}>
          <h1 className={`${styles.header} text-xl`}>Commande test</h1>
        </div>
    </div>
  )
}

export default Header