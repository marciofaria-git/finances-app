import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { AuthContextProvider } from '../contexts/authContext'
import GlobalStyles from '../styles/global'
import { combineTheme, dark, light } from '../styles/themes'
import Analytics from 'analytics'

import googleTagManager from '@analytics/google-tag-manager'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light))

  // const toggleTheme = () => {
  //   if (theme.title === 'light') {
  //     setTheme(combineTheme(dark))
  //     localStorage.setItem('theme', 'dark')
  //   }
  //   if (theme.title === 'dark') {
  //     setTheme(combineTheme(light))
  //     localStorage.setItem('theme', 'light')
  //   }
  // }
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

    checkTheme()
  }, [])

  const analytics = Analytics({
    app: 'awesome-app',

    plugins: [
      googleTagManager({
        containerId: 'GTM-57Z7P3F'
      })
    ]
  })

  analytics.page()
  console.log(googleTagManager)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
