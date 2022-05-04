import Link from 'next/link'
import React from 'react'
import { Button } from '../Button/button'
import { Input } from '../Input/Input'
import { FcGoogle } from 'react-icons/fc'
import { useRouter } from 'next/router'

import {
  Container,
  Content,
  ContentButton,
  ContentInput,
  Icone,
  Nav,
  SubTitle
} from './loginStyle'
import { useAuth } from '../../hooks/useAuth'

function Login() {
  const { user, signInWithGoogle } = useAuth()
  const router = useRouter()

  async function handleSignInWithGoogle() {
    if (!user) {
      await signInWithGoogle()
    }
    console.log(user)
    router.push('/dashboard')
  }

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
          <Button>Login</Button>
          <Button type="button" onClick={handleSignInWithGoogle}>
            <Icone>
              <FcGoogle fontSize={'40px'} />
            </Icone>
            Sign with google
          </Button>
        </ContentButton>
      </Container>
    </>
  )
}

export default Login
