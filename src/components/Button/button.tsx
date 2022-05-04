import React from 'react'
import { DefaultButton } from './buttonStyle'
import { ButtonProps } from './interface/ButtonProps'

function Button({ ...props }: ButtonProps) {
  return (
    <>
      <DefaultButton {...props}></DefaultButton>
    </>
  )
}

export { Button }
