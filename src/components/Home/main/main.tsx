import React from 'react'
import Image from 'next/image'
import { Container, Logo } from './mainStyle'
import logo from '../../../public/assets/FinancesLogo.svg'
import Login from '../../Login/login'

function MainHome() {
  return (
    <>
      <Container>
        <Logo>
          <Image src={logo} alt="Logo Finances" width="120" height="120" />
        </Logo>
        <Login />
      </Container>
    </>
  )
}

export default MainHome
