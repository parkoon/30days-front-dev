import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 46px;
  width: 46px;
  border: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 1.1rem;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #4481eb;
    border-color: #4481eb;
  }
`
