import React, {useState} from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [file, setFile] = useState<any>()

  function readFile(target : any) {
    let file = target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
      setFile(reader.result)
    };
    if(reader.error) {
      reader.onerror = function() {
      console.log(reader.error);
      };
    }
  }
  console.log(file);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Dao-Sign</title>
        <meta name="description" content="Dao-Sign" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       <div style={{ height: '50px'}}>Daos</div>
       <form id="upload-container" method="POST" action="send.php">
          <div>
               <input lang='en' onChange={({target}) => readFile(target)} id="file-input" type="file" name="file" />
               <div className='textUpload'>или перетащите его сюда</div>
          </div>
     </form>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
