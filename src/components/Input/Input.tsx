import React from 'react'
import { InputDefault, Label } from './inputStyle'
import { InputProps } from './Interface/InputProps'

function Input({ label, ...props }: InputProps) {
  return (
    <>
      <Label>
        {label}
        <InputDefault {...props}></InputDefault>
      </Label>
    </>
  )
}

export { Input }
