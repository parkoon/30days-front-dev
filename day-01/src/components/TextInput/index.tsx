import React, { HTMLProps, CSSProperties } from 'react'
import { Wrapper } from './styles'

type TextInputProps = {
  icon: 'user' | 'lock' | 'envelope'
  style?: CSSProperties
} & HTMLProps<HTMLInputElement>

function TextInput({ icon, style, ...props }: TextInputProps) {
  return (
    <Wrapper style={style}>
      <i className={`fas fa-${icon}`} />
      <input {...props} />
    </Wrapper>
  )
}

export default TextInput
