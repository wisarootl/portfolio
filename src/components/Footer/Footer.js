import React from 'react'
import { Container } from 'react-bootstrap'
import { Box, Title, Span } from '../Core'
import { BsHeartFill } from 'react-icons/bs'

const Footer = ({ isDark = true }) => {
  const d = new Date()
  let year = d.getFullYear()
  return (
    <>
      {/* <!-- Footer section --> */}
      <Box
        bg="bg"
        pt={['3.75rem', null, null, '3.75rem']}
        pb="3.75rem"
        css={`
          z-index: -50;
        `}
      >
        <Container>
          <div className="text-center">
            <Title
              variant="card"
              css={`
                font-size: 0.8125rem;
              `}
            >
              © 2021 - {year} All Right Reserved. <br className="d-flex d-sm-none" />
              Made with{' '}
              <Span
                color="red"
                css={`
                  padding: 0 1px;
                `}
              >
                {' '}
                <BsHeartFill />{' '}
              </Span>{' '}
              by <a href="https://www.google.com/">Wisaroot</a>
            </Title>
          </div>
        </Container>
      </Box>
    </>
  )
}

export default Footer
