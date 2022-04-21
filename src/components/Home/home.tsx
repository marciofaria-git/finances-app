import React from 'react'
import Aside from './aside/aside'
import { Container } from './homeStyle'
import MainHome from './main/main'

function HomePage() {
  return (
    <>
      <Container>
        <Aside />
        <MainHome />
      </Container>
    </>
  )
}

export default HomePage
