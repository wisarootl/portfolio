import React, { useState, useContext } from 'react'
import { Element } from 'react-scroll'

import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/landing1/Hero'
import Works from '../sections/landing1/Works'
import Contact from '../sections/landing1/Contact'
import Profile from '../sections/landing1/Profile'
import GlobalContext from '../context/GlobalContext'

const IndexPage = () => {
  return (
    <>
      {/* <PageWrapper> */}
      <Element name="about">
        <Hero />
      </Element>
      <Element name="portfolio">
        <Works />
      </Element>
      <Profile />
      <Contact />
      {/* </PageWrapper> */}
    </>
  )
}
export default IndexPage
