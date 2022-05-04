import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Container, UserAvatar, UserName } from './userCardProfileStyle'

function UserCardProfile() {
  const { user } = useAuth()
  console.log(user)
  return (
    <Container>
      <UserAvatar src={user?.avatar} />
      <UserName>{user?.name || 'User'}</UserName>
    </Container>
  )
}

export { UserCardProfile }
