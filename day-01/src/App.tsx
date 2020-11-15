import React from 'react'
import Button from './components/Button'
import TextInput from './components/TextInput'
import SocialIcon from './components/SocialIcon'

function App() {
  return (
    <div>
      <Button>login</Button>
      <Button outlined>login</Button>

      <TextInput icon="email" type="text" placeholder="Email" />
      <TextInput icon="password" type="text" placeholder="Password" />
      <TextInput icon="username" type="text" placeholder="Username" />

      <SocialIcon icon="facebook-f" />
    </div>
  )
}

export default App
