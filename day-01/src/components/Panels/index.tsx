import React from 'react'

import { Wrapper, Column, Content } from './styles'
import Button from '../Button'

{
  /* <img src="img/log.svg" class="image" alt="" />
<img src="img/register.svg" class="image" alt="" /> */
}
function Panels() {
  return (
    <Wrapper>
      <Column>
        <Content>
          <h3>New here?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>

          <Button outlined>sign up</Button>
        </Content>

        <img src="images/log.svg" alt="logo" />
      </Column>
    </Wrapper>
  )
}

export default Panels
