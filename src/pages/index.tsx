import type { NextPage } from 'next'
import Head from 'next/head'

import React from 'react'

import HomePage from '../components/Home/home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Finances</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <HomePage />
    </>
  )
}

export default Home
