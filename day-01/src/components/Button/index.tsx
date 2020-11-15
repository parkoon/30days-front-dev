import React from 'react'

import { Wrapper } from './styles'

export type ButtonProps = {
  children: React.ReactNode
  outlined?: boolean
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

function Button({ children, ...props }: ButtonProps) {
  return <Wrapper {...props}>{children}</Wrapper>
}

export default Button
