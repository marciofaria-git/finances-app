import React from 'react'
import { DefaultButton } from './buttonStyle'
import { ButtonProps } from './interface/ButtonProps'

function Button({ value }: ButtonProps) {
  return (
    <>
      <DefaultButton>{value}</DefaultButton>
    </>
  )
}
export { Button }
