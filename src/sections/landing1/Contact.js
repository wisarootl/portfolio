import React from 'react'
import { rgba } from 'polished'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Section, Title, Text, Span, Box } from '../../components/Core'
import { device } from '../../utils'
import Social from '../../components/Social'
import { social_items } from '../../data'
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
// import { color, background } from 'styled-system'
import { Link } from 'gatsby'

const ContactCard = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.1)};
  color: ${({ theme }) => theme.colors.light};
`

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  transition: 0.4s;
  background-color: ${({ theme }) => theme.colors.lightShade};
  border-radius: 10px;
  cursor: pointer;
  :hover {
    transform: translateY(-5px);
  }

  .social-icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    // border-radius: 5%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-right: 0.65rem;
    border: none;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.light};
  }

  .social-text {
    color: ${({ theme }) => theme.colors.dark};
  }
`

function copy_email_contact() {
  /* Get the text field */
  var copyText = 'l.wisaroot@gmail.com'

  navigator.clipboard.writeText(copyText)

  /* Alert the copied text */
  var tooltip = document.getElementById('email-contact')
  tooltip.innerHTML = 'Copied!'
}

function mouse_leave_email_contact() {
  var tooltip = document.getElementById('email-contact')
  tooltip.innerHTML = 'L.Wisaroot@gmail.com'
}

const Contact = ({ hero = false, bg = 'dark', ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row
            className="justify-content-center"
            css={`
              @media ${device.lg} {
                margin-top: -20px;
                margin-bottom: -20px;
              }
            `}
          >
            <Col lg="10">
              <ContactCard className="p-5 ml-lg-5 mr-lg-5">
                <Row>
                  <Col md="6" className="mb-3">
                    <a href="https://www.linkedin.com/in/wisaroot/" target="_blank">
                      <SocialContainer>
                        <Span className="social-icon">
                          <FaLinkedinIn />
                        </Span>

                        <Text variant="small" className="social-text">
                          linkedin.com/in/wisaroot
                        </Text>
                      </SocialContainer>
                    </a>
                  </Col>
                  <Col md="6" className="mb-3">
                    <a href={undefined}>
                      <SocialContainer
                        onClick={copy_email_contact}
                        onMouseLeave={mouse_leave_email_contact}
                      >
                        <Span className="social-icon">
                          <FaEnvelope />
                        </Span>

                        <Text
                          variant="small"
                          className="social-text"
                          id="email-contact"
                          onClick={copy_email_contact}
                        >
                          L.Wisaroot@gmail.com
                        </Text>
                      </SocialContainer>
                    </a>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="6" className="mb-3 mb-md-0">
                    <SocialContainer>
                      <Span className="social-icon">
                        <FaPhoneAlt />
                      </Span>
                      <Text variant="small" className="social-text">
                        (+66)97-162-4939
                      </Text>
                    </SocialContainer>
                  </Col>
                  <Col md="6">
                    <SocialContainer>
                      <Span className="social-icon">
                        <FaMapMarkerAlt />
                      </Span>
                      <Text variant="small" className="social-text">
                        Bangkok, Thailand
                      </Text>
                    </SocialContainer>
                  </Col>
                </Row>
              </ContactCard>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Contact
