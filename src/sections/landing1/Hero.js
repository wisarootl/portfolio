import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-scroll'

import { Title, Button, Section, Box, Text } from '../../components/Core'
import { device } from '../../utils'
import imgL from '../../assets/img/profile.jpg'
import Social from '../../components/Social'

const ImgRight = styled.img`
  max-width: 100%;
`

const Hero = () => {
  const d = new Date()
  let year = d.getFullYear()
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section hero className="position-relative">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg="5" md="8" sm="9">
              <div className="text-center text-lg-right position-relative">
                <div className="img-main">
                  <ImgRight
                    src={imgL}
                    alt=""
                    css={`
                      border-radius: 50rem !important;
                    `}
                  />
                </div>
              </div>
            </Col>
            <Col lg="7" className="mb-5 mb-lg-0 pt-5">
              <Box>
                <Text variant="tag" className="text-uppercase" color="heading" mb="25px">
                  Wisaroot Lertthaweedech
                </Text>
                <Title mb="0.5rem">Senior Data Scientist</Title>
                <Text
                  color="text"
                  css={`
                    line-height: 1.5;
                    font-size: 1.1rem;
                  `}
                  mb="2.5rem"
                >
                  Software Engineer | Python | Machine Learning | Driving data insights and building
                  scalable solutions <span className="emphasize-text">🚀</span>
                </Text>
                <Box
                  color="text"
                  css={`
                    p {
                      line-height: 1.5;
                      font-size: 0.95rem;
                      text-align: justify;
                      text-indent: 20px;
                    }
                  `}
                  mb="2.5rem"
                >
                  <p>
                    I am a Senior Data Scientist with{' '}
                    <span class="emphasize-text">
                      <span class="python-experience">{year - 2017}</span> years
                    </span>{' '}
                    of expertise in <code>Python</code>, <code>Machine Learning</code>, and{' '}
                    <code>Data Science</code>, holding an{' '}
                    <span class="emphasize-text">
                      M.Sc. in Computer Science from Chulalongkorn University
                    </span>
                    . My proven track records at Honest Technology include expediting{' '}
                    <code>credit risk model</code> launching—a critical contribution to the
                    company's $20 million fundraising success. I have played a key role in the{' '}
                    <code>hiring</code> process and team growth, implemented a highly efficient{' '}
                    <code>Python</code> framework resulting in over 50% time savings, and cultivated
                    high-quality codebases using modern <code>DevOps</code> tools. Additionally, I
                    possess solid fundamental <code>finance</code> knowledge from passing{' '}
                    <span class="emphasize-text">CFA I</span>.
                  </p>
                </Box>
                <Box className="d-flex flex-column align-items-center text-center">
                  <Social className="test classname" />
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Hero
