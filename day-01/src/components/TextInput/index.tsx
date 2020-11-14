import React, { HTMLProps, CSSProperties } from 'react'

import { MdAccountCircle, MdEmail, MdHttps } from 'react-icons/md'


import { Wrapper } from './styles'

type TextInputProps = {
  icon: 'username' | 'password' | 'email'
  style?: CSSProperties
} & HTMLProps<HTMLInputElement>

function TextInput({ icon, style, ...props }: TextInputProps) {

  const Icon = icon === 'username' ? MdAccountCircle : icon === 'password' ? MdHttps :  MdEmail 
  return <Wrapper style={style}>

    <Icon size={25}/>
    <input {...props}/>


  </Wrapper>
}

export default TextInput
