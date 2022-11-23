import React, {useState} from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Connect from '../components/Connect'
import Footer from '../components/Footer/Footer'
import {LogoAnimate} from '../components/Logo/Logo'
import Header from '../components/Header/Header'
import { Container } from 'theme-ui'
import CreateAgreement from '../components/CreateAgreement'
import {animateContainer} from '../components/Logo/styles'

const Home: NextPage = () => {
  const [address, setAddres] = useState<string>('');
  return (
  <Container sx={{width: '100%', paddingTop: '80px'}} >
    <Head>
      <title>Dao-Sign</title>
      <meta name="description" content="Dao-Sign" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
   { !address ? <Container sx={animateContainer}> 
      <LogoAnimate/>
      <Connect setAddres={setAddres}/>
      </Container> : <>
      <Header address={address || ''}/> 
      <CreateAgreement/> 
      </>
    }
    <Footer/>
  </Container>
  )
}

export default Home