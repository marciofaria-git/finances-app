import React from 'react'
import {
  Container,
  ContentIndicator,
  IconIndicator,
  NameIndicator,
  Value
} from './cardStyle'
import { CardProps } from './interface/cardInterface'

function Card({ nameIndicator, iconUrl, value }: CardProps) {
  return (
    <>
      <Container>
        <ContentIndicator>
          <NameIndicator>{nameIndicator}</NameIndicator>
          <IconIndicator src={iconUrl}></IconIndicator>
        </ContentIndicator>
        <Value>{value}</Value>
      </Container>
    </>
  )
}

export { Card }
