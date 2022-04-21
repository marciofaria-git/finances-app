import styled from 'styled-components'

export const DefaultButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 60px;

  background: ${(props) => props.theme.colors.button};
  color: ${(props) => props.theme.colors.text};
  border: 1px none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`
