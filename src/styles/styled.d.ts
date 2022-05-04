import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    buttons: {
      primary: string
    }
    inputs: {
      primary: string
    }

    colors: {
      primary: string
      secundary: string
      background: string
      text: string
    }
    fontSizes: {
      small: string
      medium: string
      large: string
    }
  }

  export interface CustomTheme {
    title: string
    buttons: {
      primary: string
    }

    inputs: {
      primary: string
    }
    colors: {
      primary: string
      secundary: string
      background: string
      text: string
    }
  }
}
