import { useState } from 'react'
import { DefaultTheme } from 'styled-components'
import { combineTheme, dark, light } from '../styles/themes'

function useFetch(theme, setTheme) {
  if (theme.title === 'light') {
    setTheme(combineTheme(dark))
  }
  if (theme.title === 'dark') {
    setTheme(combineTheme(light))
  }

  return theme
}

export default useFetch
