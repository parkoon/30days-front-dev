import styled from 'styled-components'

export const Wrapper = styled.div``

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 50%;

  img {
    width: 100%;
  }
`

export const Content = styled.div`
  background: red;
  h3 {
    font-weight: 600;
    font-size: 1.5rem;
  }

  p {
    font-size: 0.9rem;
    padding: 0.7rem 0;
  }
`
