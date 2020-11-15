import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #f0f0f0;

  max-width: 380px;
  height: 55px;
  border-radius: 55px;
  width: 100%;

  display: grid;
  grid-template-columns: 15% 85%;

  padding: 0 0.4rem;

  i {
    font-size: 1.1rem;
    line-height: 55px;
    text-align: center;
    color: #acacac;
  }

  input {
    border: none;
    outline: none;
    background: none;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;

    &::placeholder {
      color: #aaa;
      font-weight: 500;
    }
  }
`
