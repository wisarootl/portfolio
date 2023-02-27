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
                    I'm a <span className="emphasize-text">👨‍💻</span> technology enthusiast with{' '}
                    {year - 2005} years of coding experience, including{' '}
                    <span className="emphasize-text">{year - 2017} years of experience</span>{' '}
                    specializing in <code>Python</code> <span className="emphasize-text">🐍</span>.
                    I also specialize in <code>Machine Learning</code>{' '}
                    <span className="emphasize-text">🤖</span>, and <code>Data Science</code> for{' '}
                    <code>Time Series</code> and <code>NLP</code>. I hold a{' '}
                    <span className="emphasize-text">🎓</span>{' '}
                    <span className="emphasize-text">M.Sc. in Computer Science</span> from
                    Chulalongkorn University and possess skills in software and web development,
                    including technologies such as
                    <code>Javascript</code>, <code>SQL</code>, <code>CSS</code>, <code>HTML</code>,
                    <code>Frontend</code>, <code>Backend</code>, <code>Database</code>,{' '}
                    <code>Node.js</code>, <code>React</code>, and <code>MongoDB</code>.
                  </p>
                  <p>
                    Currently, I'm a{' '}
                    <span className="emphasize-text">senior data scientist 👨‍🔬</span> at Honest
                    Technology, where I've developed an{' '}
                    <span className="emphasize-text">machine learning research framework 🚀</span>{' '}
                    that is composable, highly scalable, and easily deployable to production. In
                    addition, I've also gained skills in <code>DevOps</code> and <code>CI/CD</code>,
                    working with modern tooling such as <code>Terraform Cloud</code> to build cloud
                    infrastructure as code <span className="emphasize-text">🏗️</span>.
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
