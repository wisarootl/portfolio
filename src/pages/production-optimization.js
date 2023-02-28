import React, { useState, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { Element } from 'react-scroll'

import { Section, Button, Title, Text, Box } from '../components/Core'
import Contact from '../sections/landing1/Contact'
import imgWorkCover from '../assets/img/portfolio/well-list-production-optimization.png'
import { device, breakpoints } from '../utils'

import { HiArrowNarrowLeft } from 'react-icons/hi'
import { BiDollar } from 'react-icons/bi'
import { FaTrophy, FaSmileBeam } from 'react-icons/fa'

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
            display: block;
          }
        `}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="9">
              <Text variant="tag">Software Development</Text>
              <Title variant="secSm" className="my-4">
                Application for Production Optimization
              </Title>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">01. Brief</Title>
              <p>
                Led the design and development of{' '}
                <span className="emphasize-text">algorithm-driven software 💻</span> for production{' '}
                <code>optimization</code> in Chevron, a world-leading Oil & Gas company, using{' '}
                <code>Python</code> <span className="emphasize-text">🐍</span> and <code>VBA</code>,
                resulting in <span className="emphasize-text">✅15.2% higher oil production</span>,{' '}
                <span className="emphasize-text">✅$15.3 million/year additional revenue</span>, and
                improved workforce efficiency with reduced human error.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">02. Skills</Title>
              <p>
                <code>Software Development</code>, <code>Python</code>, <code>Excel Macro VBA</code>
                , <code>Database</code>, <code>UX/UI</code>, <code>Collaboration</code>,{' '}
                <code>ETL</code>, <code>Optimization Algorithm</code>,{' '}
                <code>Linear Programming</code>
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
                          color: #e8ad11;
                        `}
                      >
                        <FaTrophy />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Fulfilled All Field Objectives
                    </Title>
                    <Text variant="small">
                      Achieved all goals for gas field operation, including meeting the well
                      depletion target, optimizing oil and gas production, reducing reserves loss,
                      and maintaining gas specification within the desired range.
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
                          color: #7a996d;
                        `}
                      >
                        <BiDollar />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      $15.3 Million More Annual Revenue
                    </Title>
                    <Text variant="small">
                      Attained a 15.2% increase in oil production and generated an additional
                      revenue of $15.3 million per year by operating the field at optimized
                      conditions.
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
                          color: #e4a8ae;
                        `}
                      >
                        <FaSmileBeam />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Agile Operations
                    </Title>
                    <Text variant="small">
                      Implemented a more automated framework that enabled data-driven operations,
                      resulting in agile operations and improved workforce efficiency with reduced
                      human error.
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
                Operating a gas field with around 1,000 wells presents various challenges, including
                conflicting goals such as maintaining gas specifications while balancing depletion
                targets, and dealing with dynamically changing conditions. These challenges are
                compounded by a manual operation process that leads to sub-optimization, lower
                production, increased operator workload, human error, inconsistent operation, and
                inadequate adaptation to changing conditions.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">05. Actions</Title>
              <p>
                • Develop an in-house application with <code>optimization algorithms</code> based on{' '}
                <code>linear programming</code> to prioritize well operation in different
                situations.
              </p>
              <p>
                • Collaborate with the Petroleum Engineering team to identify all the goals and
                requirements, and then translate them into objective functions and constraints.
                These will be used by the optimization algorithm to prioritize well operation in
                different scenarios, such as excessive water production, low gas production, and
                maximum oil production.
              </p>
              <p>
                • Design and implement a <code>database</code> along with an <code>ETL</code>{' '}
                (Extract-Transform-Load) process to ensure that the application can handle data
                streams seamlessly, and provide a user-friendly dashboard for well monitoring.
              </p>
              <p>
                • Consult with operators, the main users of the application, to identify pain points
                and develop features that address their needs.
              </p>
              <p>
                • Communicate regularly with the Petroleum Engineering and operator teams to balance
                short-term and long-term goals, maximizing profit and company reputation while
                achieving all objectives.
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
