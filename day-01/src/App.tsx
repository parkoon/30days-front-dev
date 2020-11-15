import React, { useState } from 'react'
import SignForm from './components/SignForm'
import Panels from './components/Panels'
import styled, { css } from 'styled-components'

const Container = styled.div<{ isSignInMode: boolean }>`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -5%;
    right: 48%;
    transform: translateY(-50%);
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background: linear-gradient(-45deg, #4481eb, #04befe);
    transition: 1.8s ease-in-out;
    z-index: 6;

    ${({ isSignInMode }) => isSignInMode && css`
      transform: translate(100%, -50%);
      right: 52%;
    `}
  }
`


function App() {
  const [signInMode, setSignInMode] = useState(false)


  return (
    <Container isSignInMode={signInMode}>
      <SignForm isSignInMode={signInMode}/>

      <Panels onSignInMode={(value) => setSignInMode(value)} isSignInMode={signInMode}/>
    </Container>
  )
}

export default App
