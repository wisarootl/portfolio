import React, { useState, useEffect, useLayoutEffect, useContext, useRef } from 'react'

import styled, { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import AOS from 'aos'

import Header from '../Header'
import Footer from '../Footer'

// import ModalVideo from '../ModalVideo'
// import ContactModal from '../ContactModal'
// import AboutModal from '../AboutModal'

import GlobalContext from '../../context/GlobalContext'

import GlobalStyle from '../../utils/globalStyle'

import imgFavicon from '../../assets/favicon.png'

import '../../assets/fonts/icon-font/fonts/avasta.ttf'
import '../../assets/fonts/icon-font/fonts/Grayic.ttf'
import '../../assets/fonts/icon-font/css/style.css'

import './bootstrap-custom.scss'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import '../../../node_modules/aos/dist/aos.css'

import '../../assets/fonts/icon-font/css/style.css'

import { get, merge } from 'lodash'

// the full theme object
import { theme as baseTheme } from '../../utils'

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 0.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`

const StyleWrapper = styled.div`
  .emphasize-text {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.heading};
  }

  code {
    font-size: 85%;
    color: ${({ theme }) => theme.colors.codeText};
    background: ${({ theme }) => theme.colors.codeBg};
    border-radius: 3px;
    padding-left: 0.4em;
    padding-right: 0.4em;
    padding-bottom: 0.2em;
    padding-top: 0.1em;
    position: relative;
    top: -1px;
  }
`

// options for different color modes
const modes = { light: 'light', dark: 'dark' }

// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors)
  })

const Layout = ({ children, pageContext }) => {
  const title =
    'Wisaroot | Senior Data Scientist 👨‍💻 | Software Engineer 💻 | Python 🐍 | Machine Learning 🤖 | Driving data insights and building scalable solutions 🚀'
  const gContext = useContext(GlobalContext)

  const [visibleLoader, setVisibleLoader] = useState(true)

  useLayoutEffect(() => {
    AOS.init()
    setVisibleLoader(false)
  }, [])

  // Navbar style based on scroll
  const eleRef = useRef()

  useEffect(() => {
    window.addEventListener(
      'popstate',
      function(event) {
        // The popstate event is fired each time when the current history entry changes.
        gContext.closeAbout()
        gContext.closeContact()
      },
      false
    )
    window.addEventListener(
      'pushState',
      function(event) {
        // The pushstate event is fired each time when the current history entry changes.
        gContext.closeAbout()
        gContext.closeContact()
      },
      false
    )

    return () => {}
  }, [gContext])

  if (pageContext.layout === 'bare') {
    return (
      <ThemeProvider theme={gContext.theme.bodyDark ? getTheme(modes.dark) : getTheme(modes.light)}>
        <StyleWrapper>
          <GlobalStyle />
          <Helmet>
            <meta
              name="google-site-verification"
              content="-TcdlDhf3gzhH8NKj9wU8rDBt6QjuqFAML_ooIUv9Sk"
            />
            <title>{title}</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
          </Helmet>
          <Loader id="loading" className={visibleLoader ? '' : 'inActive'}>
            <div className="load-circle">
              <span className="one"></span>
            </div>
          </Loader>
          <div className="site-wrapper overflow-hidden" ref={eleRef}>
            {children}
          </div>
        </StyleWrapper>
      </ThemeProvider>
    )
  }

  return (
    <>
      <ThemeProvider theme={gContext.theme.bodyDark ? getTheme(modes.dark) : getTheme(modes.light)}>
        {/* <ThemeSwitch /> */}
        <StyleWrapper>
          <GlobalStyle />
          <Helmet>
            <meta
              name="google-site-verification"
              content="-TcdlDhf3gzhH8NKj9wU8rDBt6QjuqFAML_ooIUv9Sk"
            />
            <title>{title}</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
          </Helmet>
          <Loader id="loading" className={visibleLoader ? '' : 'inActive'}>
            <div className="load-circle">
              <span className="one"></span>
            </div>
          </Loader>
          <div className="site-wrapper overflow-hidden" ref={eleRef}>
            <Header isDark={gContext.theme.headerDark} />
            {children}

            <Footer isDark={gContext.theme.footerDark} />
          </div>
          {/* <AboutModal /> */}
          {/* <ContactModal /> */}
          {/* <ModalVideo /> */}
        </StyleWrapper>
      </ThemeProvider>
    </>
  )
}

export default Layout
