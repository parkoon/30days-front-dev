import React from 'react'

import { Wrapper } from './styles'
import SocialIcon from '../SocialIcon'

function SocialLoginField() {
  return (
    <Wrapper>
      <SocialIcon icon="facebook-f" />
      <SocialIcon icon="google" />
      <SocialIcon icon="twitter" />
      <SocialIcon icon="linkedin" />
    </Wrapper>
  )
}

export default SocialLoginField
