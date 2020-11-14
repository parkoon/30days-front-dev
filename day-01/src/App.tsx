import React from 'react'
import Button from './components/Button'
import TextInput from './components/TextInput'

function App() {
  return (
    <div>
      <Button>login</Button>
      <Button outlined>login</Button>

      <TextInput icon="email" type="text" placeholder="Email"/>
      <TextInput icon="password" type="text" placeholder="Password"/>
      <TextInput icon="username" type="text" placeholder="Username"/>


    </div> 
  )
}

export default App
