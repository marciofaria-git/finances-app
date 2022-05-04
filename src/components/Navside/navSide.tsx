import React from 'react'
import { UserCardProfile } from '../UserCardProfile/userCardProfile'

import { Container, OptionItem, OptionNav } from './navSideStyle'

function NavSide() {
  return (
    <Container>
      <UserCardProfile />
      <OptionNav>
        <OptionItem>Dashboard</OptionItem>
        <OptionItem>Settings</OptionItem>
        <OptionItem>Reports</OptionItem>
      </OptionNav>
    </Container>
  )
}

export { NavSide }
