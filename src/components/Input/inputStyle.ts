import styled from 'styled-components'

export const InputDefault = styled.input`
  display: flex;
  border: none;
  width: 100%;

  border-bottom: 1px solid ${(props) => props.theme.inputs.primary};

  padding: 5px 5px 10px 10px;
  font-size: 20px;

  color: ${(props) => props.theme.colors.text};
  background: transparent;
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 300;
  font-size: 20px;
`
