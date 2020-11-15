import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 50%;

  position: absolute;
  left: 75%;
  top: 50%;
  transform: translate(-50%, -50%);
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
`

export const FormWrapper = styled.form<{ visible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  grid-column: 1 /2;
  grid-row: 1 / 2;

  z-index: ${({ visible }) => (visible ? 2 : 1)};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`
