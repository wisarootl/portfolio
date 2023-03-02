import React, { useState, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { Element } from 'react-scroll'

import { Section, Button, Title, Text, Box } from '../components/Core'
import Contact from '../sections/landing1/Contact'
import imgWorkCover from '../assets/img/portfolio/pipiline-network-modeling.png'
import { device, breakpoints } from '../utils'

import { HiArrowNarrowLeft } from 'react-icons/hi'
import { BiDollar } from 'react-icons/bi'
import { FaThumbsUp } from 'react-icons/fa'
import { HiLightBulb } from 'react-icons/hi'

const WorkSingle = () => {
  return (
    <>
      <Section
        py={['50px', null, '50px', '75px']}
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
                Automated Pipeline Network Modeling Software
              </Title>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">01. Brief</Title>
              <p>
                Led the development of a{' '}
                <span className="emphasize-text">software application 🏭</span> using{' '}
                <code>Python</code> <span className="emphasize-text">🐍</span> and <code>VBA</code>{' '}
                for Chevron, a world-leading Oil & Gas company, that automated pipeline network
                modeling,{' '}
                <span className="emphasize-text">✅cutting investment costs by $49.8 million</span>.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">02. Skills</Title>
              <p>
                <code>Software Development</code>, <code>Python</code>, <code>Excel Macro VBA</code>
                , <code>Data Structure</code>, <code>Database</code>, <code>Search Algorithms</code>
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
                @media (max-width: 576px) {
                  padding-left: 15px;
                }
              }

              .achievements-card {
                margin-top: 15px;
                @media (max-width: ${breakpoints.sm}px) {
                  padding-left: 0px;
                  padding-right: 0px;
                }
              }

              .achievements-card2 {
                background: ${({ theme }) => theme.colors.shadow};
                padding-bottom: 15px;
                padding-top: 15px;
                border-radius: 20px;
              }

              .achievements-icon2 {
                width: 80px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.5rem;
                border-radius: 50%;
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
            <Col lg="4" className="achievements-card">
              <Col className="col-12 h-100 achievements-card2">
                <Row>
                  <Col className="col-12 d-flex achievements-icon" lg="12" sm="3">
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
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      $49.8 million Less Investment
                    </Title>
                    <Text variant="small">
                      Researched for multiple pipeline network scenarios through the software to
                      determine the most optimal solution, resulting in a significant reduction in
                      investment costs.
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Col>
            <Col lg="4" className="achievements-card">
              <Col className="col-12 h-100 achievements-card2">
                <Row>
                  <Col className="col-12 d-flex achievements-icon" lg="12" sm="3">
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
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Less Workload
                    </Title>
                    <Text variant="small">
                      Streamlined pipeline network modeling, creating a more efficient and automated
                      research framework. The new framework offers optimized investment
                      opportunities and has drastically reduced team workload for the research team.
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Col>
            <Col lg="4" className="achievements-card">
              <Col className="col-12 h-100 achievements-card2">
                <Row>
                  <Col className="col-12 d-flex achievements-icon" lg="12" sm="3">
                    <div className="achievements-icon2">
                      <span
                        css={`
                          color: #e8ad11;
                        `}
                      >
                        <HiLightBulb />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Enhanced Design
                    </Title>
                    <Text variant="small">
                      Optimized pipeline network scenarios researched through the software resulted
                      in a more efficient and effective pipeline notwork design, improving
                      operational efficiency and reducing maintenance requirements.
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
                At Chevron, we use specialized petroleum simulation software to model complex
                pipeline systems in the oil and gas industry. This software is crucial for providing
                a detailed understanding of the behavior of fluids and gases within pipelines,
                allowing for accurate predictions and simulations of various pipeline scenarios.
              </p>
              <p>
                However, we encountered{' '}
                <span className="emphasize-text">
                  challenges when transferring big amounts of pipeline network information
                </span>{' '}
                stored in an Excel file to the specialized petroleum simulation software. The
                transfer process of this data was manual and, hence, it was inefficient and prone to
                errors, resulting in outdated information that was not suitable for research with
                various pipeline conditions. This also hindered our ability to optimize pipeline
                installation design.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">05. Actions</Title>
              <p>
                • Developed an in-house application that automates the process of data transferring
                between Excel and the specialized petroleum simulation software.
              </p>
              <p>
                • The connection between Excel and the software requires a specific technology that
                is not commonly available on the internet. I had to rely on documentation to learn
                this programming language from scratch
              </p>
              <p>
                • Conducted research to identify optimized pipeline network scenarios and utilized
                Python to visualize and analyze large amounts of data for the research, as it is
                more efficient at handling big data.
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
      <Contact />
    </>
  )
}
export default WorkSingle
