import React from 'react'

import { Wrapper } from './styles'

export type ButtonProps = {
  children: React.ReactNode
}

function Button({ children, ...props }: ButtonProps) {
  return <Wrapper {...props}>{children}</Wrapper>
}

export default Button
