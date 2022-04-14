import React, { useState, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { Element } from 'react-scroll'

import { Section, Button, Title, Text, Box } from '../components/Core'
import Contact from '../sections/landing1/Contact'
import imgWorkCover from '../assets/img/portfolio/pipiline-network-modeling.png'
import { device } from '../utils'

import { HiArrowNarrowLeft } from 'react-icons/hi'
import { BiDollar } from 'react-icons/bi'
import { FaTrophy, FaThumbsUp } from 'react-icons/fa'

const WorkSingle = () => {
  // ! const gContext = useContext(GlobalContext)
  // ! gContext.isHomepage = false

  return (
    <>
      <Section
        className="mt-lg-5 mt-3"
        css={`
          p {
            text-align: justify;
            font-size: 1rem;
          }

          span.sub-bullet {
            margin-left: 30px;
          }
        `}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="9">
              <Text variant="tag">Software Development</Text>
              <Title variant="secSm" className="my-4">
                Application for Pipeline Network Modelling
              </Title>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">01. Brief</Title>
              <p>
                • Developed an in-house <span className="emphasize-text">software application</span>{' '}
                for Chevron, a world leading Oil & Gas company, to automatically generate a pipeline
                network model for Gas field in the simulator.
                <br />• Researched optimized pipeline network scenarios saving investment cost for{' '}
                <span className="emphasize-text">49.8 million USD</span>.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">02. Skills</Title>
              <p>
                <code>Software Development</code>, <code>Python</code>, <code>Excel Macro VBA</code>
                , <code>Data Structure</code>, <code>Database</code>
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
            <Col lg="6" className="mb-5">
              <img src={imgWorkCover} alt="" className="img-fluid w-100" />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-1">
            <Col lg="9">
              <Title variant="cardLg">03. Achievements</Title>
            </Col>
          </Row>
          <Row
            className="justify-content-center mt-0 mb-4"
            css={`
              .achievements-icon {
                font-size: 5rem;
                justify-content: center;
                align-items: center;
              }
              .achievements-desc {
                text-align: center;
                padding-left: 0px;
                @media ${device.lg} {
                  padding-left: 15px;
                }
              }

              .achievements-card {
                margin-top: 15px;
              }

              .achievements-card2 {
                background: ${({ theme }) => theme.colors.shadow};
                padding-bottom: 15px;
                padding-top: 15px;
                border-radius: 20px;
              }

              .achievements-icon2 {
                min-width: 80px;
                width: 80px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.5rem;
                border-radius: 50%;
                margin-right: 0.65rem;
                border: none;
                transition: 0.4s;
                font-size: 3rem;
                color: #000;
                background: ${({ theme }) => theme.colors.light};
              }

              .achievements-icon2 > span {
                margin-top: -10px;
              }
            `}
          >
            <Col lg="6" className="achievements-card">
              <Col className="col-12 h-100 achievements-card2">
                <Row>
                  <Col className="col-3 d-flex achievements-icon" lg="12">
                    <div className="achievements-icon2">
                      <span
                        css={`
                          color: #7a996d;
                        `}
                      >
                        <BiDollar />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-9 achievements-desc" lg="12">
                    <Title variant="cardSm" className="mt-3">
                      49.8 MUSD Less Investment
                    </Title>
                    <Text variant="small">
                      Saving investment cost of 49.8 million USD for optimized pipeline
                      installation.
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Col>
            <Col lg="6" className="achievements-card">
              <Col className="col-12 h-100 achievements-card2">
                <Row>
                  <Col className="col-3 d-flex achievements-icon" lg="12">
                    <div className="achievements-icon2">
                      <span
                        css={`
                          color: #0084ff;
                        `}
                      >
                        <FaThumbsUp />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-9 achievements-desc" lg="12">
                    <Title variant="cardSm" className="mt-3">
                      Less Workload
                    </Title>
                    <Text variant="small">
                      The software that leads to a new framework that is more automated,
                      user-friendly, more effective, and optimal investment in the future.
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">04. Problems</Title>
              <p>
                • Difficulties for big data to import/export between excel and petroleum simulation
                software. It was handled manually. Thus, it is ineffective and not updated
                information. Not suitable for research with various pipeline conditions. Not optimal
                design of pipeline installation.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">05. Actions</Title>
              <p>
                • Develop an in-house application to automatically import/export data between excel
                and petroleum simulation software.
              </p>
              <p>
                • The connection between excel and the software requires a very specific programming
                language that is not available on google. Rare specialists. They only are available
                in manual and some simple example software from previous work in the company. I have
                to learn almost all thing myself from scratch.
              </p>
              <p>
                • Researched for optimized pipeline network scenarios and utilized python to
                visualize data for the research as it can handle big data faster.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Link to="/">
              <Button>
                <HiArrowNarrowLeft
                  className="mr-4"
                  css={`
                    font-size: 1.25rem;
                  `}
                />
                Home
              </Button>
            </Link>
          </Row>
        </Container>
      </Section>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  )
}
export default WorkSingle
