import React from 'react'

import { Wrapper, LeftColumn, RightColumn, Content } from './styles'
import Button from '../Button'

type PanelsProps = {
  onSignInMode(value: boolean): void
  isSignInMode: boolean
}
function Panels({ onSignInMode, isSignInMode }: PanelsProps) {
  return (
    <Wrapper>
      <LeftColumn visible={!isSignInMode} >
        <Content>
          <h3>New here?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>

          <Button outlined onClick={() => { onSignInMode(true) }}>sign up</Button>
        </Content>

        <img src="images/log.svg" alt="logo" />
      </LeftColumn>
      <RightColumn visible={isSignInMode} >
        <Content>
          <h3>One of us</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>

          <Button outlined onClick={() => { onSignInMode(false) }}>sign in</Button>
        </Content>

        <img src="images/register.svg" alt="logo" />
      </RightColumn>
    </Wrapper>
  )
}

export default Panels
