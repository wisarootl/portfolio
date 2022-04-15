import React, { useState, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { Element } from 'react-scroll'

import { Section, Button, Title, Text, Box } from '../components/Core'
import Contact from '../sections/landing1/Contact'
import imgWorkCover from '../assets/img/portfolio/well-list-production-optimization.png'
import { device } from '../utils'

import { HiArrowNarrowLeft } from 'react-icons/hi'
import { BiDollar } from 'react-icons/bi'
import { FaTrophy, FaSmileBeam } from 'react-icons/fa'

const WorkSingle = () => {
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
                Developed an in-house <span className="emphasize-text">software application</span>{' '}
                for Chevron, a world-leading Oil & Gas company, to automatically optimize Gas and
                Oil production with limited resources and constraints resulting in 15.2% higher oil
                production, more revenue of{' '}
                <span className="emphasize-text">15.3 million USD/year</span>.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">02. Skills</Title>
              <p>
                <code>Software Development</code>, <code>Excel Macro VBA</code>,{' '}
                <code>Database</code>, <code>UX/UI</code>, <code>Collaboration</code>,{' '}
                <code>ETL</code>
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
            <Col lg="4" className="achievements-card">
              <Col className="col-12 h-100 achievements-card2">
                <Row>
                  <Col className="col-3 d-flex achievements-icon" lg="12">
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
                  <Col className="col-9 achievements-desc" lg="12">
                    <Title variant="cardSm" className="mt-3">
                      More Achievements
                    </Title>
                    <Text variant="small">
                      Achieve all the goals in different aspects for gas field operation including
                      well depletion target, oil production, gas production, low reserves loss and
                      gas specification
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Col>
            <Col lg="4" className="achievements-card">
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
                      15.3 MUSD More Revenue
                    </Title>
                    <Text variant="small">
                      Operation at optimized condition creating 15.2% more oil production (more
                      profit of 15.3 million USD yearly)
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Col>
            <Col lg="4" className="achievements-card">
              <Col className="col-12 h-100 achievements-card2">
                <Row>
                  <Col className="col-3 d-flex achievements-icon" lg="12">
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
                  <Col className="col-9 achievements-desc" lg="12">
                    <Title variant="cardSm" className="mt-3">
                      Happier Workforces
                    </Title>
                    <Text variant="small">
                      More automated framework, Less dependence on humans, Lower workload,
                      Data-driven operation, Optimized production, Lower human error, Better company
                      reputation
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">04. Problems</Title>
              <p>• There are approximately 1,000 wells in the field. </p>
              <p>
                • Multiple goals both short-term and long-term need to achieve and most of them are
                conflict with each other’s such as Well Depletion target, Oil Production, Gas
                Production, Low Reserves loss, Gas Specification
                <br />
                <span className="sub-bullet">
                  • Well Depletion/Low Reserves loss Target: We must produce from wells that are
                  nearly depleted and these wells have a low production rate. This will conflict
                  with Oil and Gas production target
                </span>
                <span className="sub-bullet">
                  • Gas specification: some gas specification needs to maintain in a range. Not too
                  high/low. Thus, we need to produce with some specific well that may not be proper
                  to maximize production
                </span>
              </p>
              <p>
                • The field contains many dynamic factors such as the wells' production rate, the
                wells' condition, activities in the field that will affect wells' operation and
                day-to-day operation issues in the field. they all are dynamic and challenging for
                operators to actively select the wells for the operation to maintain optimized
                conditions all the time.{' '}
              </p>
              <p>
                • We use humans to manually operate the wells and select the wells to open or close.
                This results in sub- optimization. Lower production. Not achieve depletion target.
                Workload to the operator, human error, inconsistent operation due to different
                operators, inadequate adaptation with condition change.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">05. Actions</Title>
              <p>
                • Develop an in-house application that has algorithms to rank the wells to operate
                in different situations
              </p>
              <p>
                • Discuss with Petroleum Engineer team/team lead to assess all the goals we have to
                achieve. Design optimization algorithm to rank priority for all the wells with
                different situations such as high-water situation, lacking gas production, maximize
                oil production.
              </p>
              <p>
                • Design database and ETL (Extract-Transform-Load) to ensure that the application
                can handle data streams seamlessly with good UI/UX. The application is also designed
                to be a dashboard for wells monitoring.
              </p>
              <p>
                • Discuss with operators as they are the main users to understand pain points and
                develop applications to serve their needs.
              </p>
              <p>
                • Actively communicate with the petroleum engineering team who will plan for long
                term and big picture in the field and the operator team who solve the day-to-day
                issues. Balance their need to maximize profit/reputation for the company and achieve
                all the goals in both the short-term and long-term.
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
