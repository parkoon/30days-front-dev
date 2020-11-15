import React from 'react'
import Button from './components/Button'
import TextInput from './components/TextInput'
import SocialIcon from './components/SocialIcon'

function App() {
  return (
    <div>
      <Button>login</Button>
      <Button outlined>login</Button>

      <TextInput icon="envelope" type="text" placeholder="Email" />
      <TextInput icon="lock" type="text" placeholder="Password" />
      <TextInput icon="user" type="text" placeholder="Username" />

      <SocialIcon icon="facebook-f" />
    </div>
  )
}

export default App
