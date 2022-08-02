import type { NextPage } from 'next'
import styles from '../styles/Main.module.css'

import { Layout, Row } from 'antd'
import Navbar from '../pages/header/navbar'
import Profile from '../pages/header/profile'
import ContenText from '../pages/content/content'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Profile />
      <ContenText />
    </div>
  )
}

export default Home
