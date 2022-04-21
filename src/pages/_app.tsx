import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import { combineTheme, dark, light } from '../styles/themes'
import Switch from 'react-switch'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light))

  const toggleTheme = () => {
    if (theme.title === 'light') {
      setTheme(combineTheme(dark))
      localStorage.setItem('theme', 'dark')
    }
    if (theme.title === 'dark') {
      setTheme(combineTheme(light))
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    function checkTheme() {
      const typeTheme = localStorage.getItem('theme')
      if (typeTheme != 'light') {
        setTheme(combineTheme(dark))
      }
      if (typeTheme != 'dark') {
        setTheme(combineTheme(light))
      }
    }

    console.log(localStorage.getItem('theme'))
    checkTheme()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch checked={theme.title === 'dark'} onChange={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
