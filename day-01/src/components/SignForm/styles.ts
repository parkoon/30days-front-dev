import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ isSignInMode: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  width: 50%;

  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  transition: 1s 0.7s ease-in-out;


  h3 {
    font-size: 2.2rem;
    color: #444;
    margin-bottom: 10px;
  }

  p {
    padding: 0.7rem 0;
    font-size: 1rem;
  }

  button {
    margin: 10px 0;
  }

  ${({ isSignInMode }) => isSignInMode && css`
    left: 25%;
  `}



`

export const FormWrapper = styled.form<{ visible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  grid-column: 1 /2;
  grid-row: 1 / 2;

  transition: 0.2s 0.7s ease-in-out;

  z-index: ${({ visible }) => (visible ? 2 : 1)};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`
