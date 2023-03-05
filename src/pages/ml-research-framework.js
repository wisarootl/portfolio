import React, { useState, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { Element } from 'react-scroll'

import { Section, Button, Title, Text, Box } from '../components/Core'
import Contact from '../sections/landing1/Contact'
import imgWorkCover from '../assets/img/portfolio/ml-research-framework.png'
import { device, breakpoints } from '../utils'

import { HiArrowNarrowLeft } from 'react-icons/hi'
import { BiDollar } from 'react-icons/bi'
import { FaTrophy, FaSmileBeam } from 'react-icons/fa'
import { FcFactory } from 'react-icons/fc'
import { IoIosRocket } from 'react-icons/io'

import { TbRobot, TbPlugConnected } from 'react-icons/tb'

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
                Machine Learning Research Framework
              </Title>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">01. Brief</Title>
              <p>
                Developed a <span className="emphasize-text">highly scalable 🚀</span> and{' '}
                <span className="emphasize-text">easily deployable 🔁</span> <code>Python</code>{' '}
                <span className="emphasize-text">🐍</span> framework for{' '}
                <code>machine learning</code> <span className="emphasize-text">🤖</span> research,
                abstracting various tools, including <code>Scikit-learn</code>,{' '}
                <code>TensorFlow</code>, <code>Optuna</code>, <code>Imbalanced-learn</code>,{' '}
                <code>XGBoost</code>, <code>Seaborn</code>, <code>Matplotlib</code>, and others.
                Includes <span className="emphasize-text">✅ composable</span> core ML components
                for <code>preprocessing</code>, <code>(un)supervised learning</code>,{' '}
                <code>deep learning</code>, and <code>recommendation systems</code>, plus robust
                error handling capabilities in production.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">02. Skills</Title>
              <p>
                <code>Software Development</code>, <code>Python</code>, <code>Design Pattern</code>,{' '}
                <code>Software Design</code>, <code>Functional Programming</code>,{' '}
                <code>Machine Learning</code>
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
                        <IoIosRocket />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Scalable ML framework
                    </Title>
                    <Text variant="small">
                      designed with composable software to streamline the research process and
                      enable easy scaling of machine learning pipelines.
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
                        <TbRobot />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Composable core ML components
                    </Title>
                    <Text variant="small">
                      includes support for essential machine learning components such as train-test
                      split, imputation, encoding, upsampling, resampl&shy;ing, cross-validation,
                      supervised learning, unsupervised learning, deep learning, neural networks,
                      recommendation systems, and natural language processing.
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
                        <TbPlugConnected />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Seamless pipeline deployment
                    </Title>
                    <Text variant="small">
                      facilitated deployment of replicated machine learning pipelines from research
                      to production.
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
                In typical machine learning processes, developers may need to use several different
                libraries and tools, such as <code>Scikit-learn</code>,{' '}
                <code>Imbalanced-learn</code>, <code>XGBoost</code>, and <code>Tensorflow</code>, to
                complete various tasks. This can make the development process time-consuming and
                complex.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">05. Actions</Title>
              <p>
                • Implemented a composable <code>software design</code> to streamline the research
                process and enable easy scaling of machine learning pipelines.
              </p>
              <p>
                • Facilitated deployment of replicated machine learning pipelines from research
                toward production.
              </p>
              <p>• Delivered outstanding results with a user-friendly and efficient framework.</p>
              <p>
                • Included a wide range of components for core machine-learning tasks, including
                train-test split, <code>imputation</code>, <code>encoding</code>,{' '}
                <code>upsampling</code>, <code>resampling</code>, and <code>cross-validation</code>,
                as well as components for <code>supervised learning</code>,{' '}
                <code>unsupervised learning</code>, <code>deep learning</code>,{' '}
                <code>neural networks</code>,<code>recommendation systems</code>, and{' '}
                <code>natural language processing</code>.
              </p>
              <p>
                • Composed the framework with specially crafted components to handle potential
                production errors, such as data with incorrect types or schema, without causing
                explicit errors and ensuring uninterrupted operation.
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
