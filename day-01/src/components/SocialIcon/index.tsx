import React from 'react'

import { Wrapper } from './styles'

type Icons = 'facebook-f' | 'twitter' | 'google' | 'linkedin'
type SocialIconProps = {
  icon: Icons
}
function SocialIcon({ icon }: SocialIconProps) {
  return (
    <Wrapper>
      <i className={`fab fa-${icon}`} />
    </Wrapper>
  )
}

export default SocialIcon
