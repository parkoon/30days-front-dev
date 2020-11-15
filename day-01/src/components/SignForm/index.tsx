import React from 'react'

import { Wrapper, FormWrapper } from './styles'
import TextInput from '../TextInput'
import Button from '../Button'
import SocialLoginField from '../SocialLoginField'


type SignFormProps = {
  isSignInMode: boolean
}
function SignForm({ isSignInMode }: SignFormProps) {
  return (
    <Wrapper isSignInMode={isSignInMode}>
      <FormWrapper visible={isSignInMode}>
        <h3>Sign in</h3>
        <TextInput
          icon="user"
          placeholder="Username"
          style={{ margin: '10px 0' }}
        />
        <TextInput
          icon="lock"
          placeholder="Password"
          style={{ margin: '10px 0' }}
        />

        <Button>login</Button>

        <p>Or Sign in with social platforms</p>

        <SocialLoginField />
      </FormWrapper>
      <FormWrapper visible={!isSignInMode}>
        <h3>Sign up</h3>
        <TextInput
          icon="user"
          placeholder="Username"
          style={{ margin: '10px 0' }}
        />
        <TextInput
          icon="envelope"
          placeholder="Email"
          style={{ margin: '10px 0' }}
        />
        <TextInput
          icon="lock"
          placeholder="Password"
          style={{ margin: '10px 0' }}
        />

        <Button>login</Button>

        <p>Or Sign in with social platforms</p>

        <SocialLoginField />
      </FormWrapper>
    </Wrapper>
  )
}

export default SignForm
