import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Connect from '../components/Connect'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import { Container } from 'theme-ui'
import Sign from '../components/Sign'

const Home: NextPage = () => {
  return (
  <Container sx={{width: '100%', paddingTop: '80px'}} >
    <Head>
      <title>Dao-Sign</title>
      <meta name="description" content="Dao-Sign" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Logo/>
    <Connect/>
    <Footer/>
  </Container>
  )
}

export default Home

// const Hash = require('ipfs-only-hash')

// const [bytes, setBytes] = useState<Uint8Array>()

// import Example from '../components/Example'
// import styles from '../styles/Home.module.css'

// async function readFile(target : any) {
//   let file = target.files[0] as File;
//   const buffer = await file.arrayBuffer()
//   const bytes = new Uint8Array(buffer) 
//   setBytes(bytes)
// }

// const ipfs= async () => {
//   const hash = await Hash.of(bytes)
//   console.log(hash);
// }

{/* <div className={styles.container}>
<Head>
  <title>Dao-Sign</title>
  <meta name="description" content="Dao-Sign" />
  <link rel="icon" href="/favicon.ico" />
</Head>
<main className={styles.main}>
 <div style={{width: '200px', height: '100px', margin: '0 auto'}}>Daos</div>
 <Example/>
 <div style={{ height: '50px'}}>Daos</div>
 <form id="upload-container" method="POST" action="send.php">
    <div>
         <input lang='en' onChange={({target}) => readFile(target)} id="file-input" type="file" name="file" />
         <div className='textUpload'>или перетащите его сюда</div>
    </div>
</form>
{bytes &&  <button style={{ marginTop: '50px'}} type='button' onClick={ipfs}>hash ipfs</button>}
</main>
<footer className={styles.footer}>
</footer>
</div> */}