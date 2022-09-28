import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dao-Sign</title>
        <meta name="description" content="Dao-Sign" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       <div style={{width: '200px', height: '100px', margin: '0 auto'}}>Daos</div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
