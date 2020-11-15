import React from 'react'

import { Wrapper, LeftColumn, RightColumn, Content } from './styles'
import Button from '../Button'


function Panels() {
  return (
    <Wrapper>
      <LeftColumn visible={true} >
        <Content>
          <h3>New here?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>

          <Button outlined>sign up</Button>
        </Content>

        <img src="images/log.svg" alt="logo" />
      </LeftColumn>
      <RightColumn visible={false} >
        <Content>
          <h3>One of us</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>

          <Button outlined>sign in</Button>
        </Content>

        <img src="images/register.svg" alt="logo" />
      </RightColumn>
    </Wrapper>
  )
}

export default Panels
