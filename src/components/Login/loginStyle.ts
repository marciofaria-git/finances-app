import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-items: center;
  align-items: center;
  gap: 2rem;
`
export const Content = styled.div`
  display: flex;
  flex-flow: row;
  gap: 2rem;
`

export const SubTitle = styled.span`
  font-size: 20px;
`

export const Nav = styled.a`
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
`

export const ContentButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 2rem;
`
export const Icone = styled.div`
  display: flex;
  position: relative;
  right: 40px;
`
