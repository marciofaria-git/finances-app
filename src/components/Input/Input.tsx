import React from 'react'
import { InputDefault, Label } from './inputStyle'

function Input({ label, ...props }) {
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
