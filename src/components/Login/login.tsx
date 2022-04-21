import Link from 'next/link'
import React from 'react'
import { Button } from '../Button/button'
import { Input } from '../Input/Input'

import {
  Container,
  Content,
  ContentButton,
  ContentInput,
  Nav,
  SubTitle
} from './loginStyle'

function Login() {
  return (
    <>
      <Container>
        <SubTitle>
          <strong>Login</strong> your account
        </SubTitle>

        <ContentInput>
          <Input label="Username" />

          <Input type="password" label="Password" />
        </ContentInput>
        <Content>
          <Link href="#">
            <Nav>Create Account</Nav>
          </Link>
          <Link href="#">
            <Nav>forget password ?</Nav>
          </Link>
        </Content>
        <ContentButton>
          <Button value="Login" />
          <Button value="Sign in with google" />
        </ContentButton>
      </Container>
    </>
  )
}

export default Login
