import React from 'react'
import { InputDefault, Label } from './inputStyle'
import { InputProps } from './Interface/InputProps'

function Input({ label, ...rest }: InputProps) {
  return (
    <>
      <Label>
        {label}
        <InputDefault {...rest}></InputDefault>
      </Label>
    </>
  )
}

export { Input }
