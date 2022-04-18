import React from 'react'
import Box from './Box'

const Section = ({ hero, children, py, ...rest }) => {
  return (
    <Box py={py ? py : ['25px', null, '50px', '75px']} {...rest}>
      {hero && <Box mt={['50px', null, '65px', '85px']}></Box>}
      {children}
    </Box>
  )
}

export default Section
