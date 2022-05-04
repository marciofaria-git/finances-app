import styled from 'styled-components'

export const DefaultButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 290px;
  height: 60px;

  font-size: 18px;

  background: ${(props) => props.theme.buttons.primary};
  color: ${(props) => props.theme.colors.text};
  border: 1px none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`

export const BlueButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 290px;
  height: 60px;

  font-size: 18px;

  background: blue;
  color: ${(props) => props.theme.colors.text};
  border: 1px none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`
