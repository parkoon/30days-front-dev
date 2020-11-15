import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

const Column = styled.div<{ visible: boolean }>`

  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  
  text-align: center;

  width: 50%;

  img {
    width: 100%;
  }
`

export const LeftColumn = styled(Column)`
  img, div {
    transform: translateX(-800px);
    opacity: 0;
  }

  ${({ visible }) => visible && css`
    img, div {
      transform: translateX(0);
      opacity: 1;
    }
  `}
`

export const RightColumn = styled(Column)`
  img, div {
    transform: translateX(800px);
    opacity: 0;
  }

  ${({ visible }) => visible && css`
    img, div {
      transform: translateX(0);
      opacity: 1;
    }
  `}
`

export const Content = styled.div`
  padding: 3rem 17% 2rem 12%;
  h3 {
    font-weight: 600;
    font-size: 1.5rem;
  }

  p {
    font-size: 0.9rem;
    padding: 0.7rem 0;
  }
`
