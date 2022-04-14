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
                <Title mb="0.5rem">Software Engineer</Title>
                <Text
                  color="text"
                  css={`
                    line-height: 1.5;
                    font-size: 1.1rem;
                  `}
                  mb="2.5rem"
                >
                  Data Scientist | Web Developer
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
                    I am passionate about coding. I start coding as a hobby since 15 years old for
                    web development, game development and gaming bot until I begin my career as a
                    petroleum engineer at Chevron. While I work there, I utilized my programming
                    skills to develop various in-house softwares for data-driven decisions in the
                    business resulting in more profit of 66.4M USD for the company. Then, I realize
                    that I would like to strengthen my programming and explore more knowledge of
                    computer science.
                  </p>
                  <p>
                    Therefore, I pursued a 🎓{' '}
                    <span className="emphasize-text">M.Sc. in Computer Science</span> from
                    Chulalongkorn University and various online courses related to
                    technology/programming. The more I learn about technology, the more I fall in
                    love with the field. I have <span className="emphasize-text">4 years</span> of
                    experience in <code>Python</code>. I specialize in{' '}
                    <code>Artificial Intelligence</code>, <code>Machine Learning</code>,{' '}
                    <code>Data Science</code> for <code>Time Series</code>, and <code>NLP</code>. I
                    also have skills in software development, web development and other technology
                    skills including <code>JavaScript</code>, <code>SQL</code>, <code>CSS</code>,{' '}
                    <code>HTML</code>, <code>Frontend</code>, <code>backend</code>,{' '}
                    <code>Database</code>, <code>Node.JS</code>, <code>React</code>,{' '}
                    <code>MongoDB</code>.
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
