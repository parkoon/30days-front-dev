import React from 'react'
import Button from './components/Button'
import TextInput from './components/TextInput'
import SocialIcon from './components/SocialIcon'
import SignForm from './components/SignForm'
import Panels from './components/Panels'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`

function App() {
  return (
    <Container>
      <SignForm />

      <Panels />
    </Container>
  )
}

export default App
