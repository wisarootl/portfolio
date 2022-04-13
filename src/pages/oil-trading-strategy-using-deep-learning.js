import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { Element } from 'react-scroll'

import { Section, Button, Title, Text, Box } from '../components/Core'
import Contact from '../sections/landing1/Contact'
import imgWorkCover from '../assets/img/portfolio/deep-learning-for-trading.jpg'
import imgResult from '../assets/img/portfolio/oil-trading-result.png'
import { device } from '../utils'

import { HiArrowNarrowLeft } from 'react-icons/hi'
import { RiStockFill } from 'react-icons/ri'

const WorkSingle = () => {
  return (
    <>
      <Section
        className="mt-lg-5 mt-3"
        css={`
          .emphasize-text {
            font-weight: 400;
            color: ${({ theme }) => theme.colors.heading};
          }

          code {
            font-size: 85%;
            color: ${({ theme }) => theme.colors.codeText};
            background: ${({ theme }) => theme.colors.codeBg};
            border-radius: 3px;
            padding-left: 0.4em;
            padding-right: 0.4em;
            padding-bottom: 0.2em;
          }

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
              <Text variant="tag">Data Science</Text>
              <Title variant="secSm" className="my-4">
                Oil Trading Strategy using Deep Learning
              </Title>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">01. Brief</Title>
              <p>
                • Researched focus on <span className="emphasize-text">time series</span>{' '}
                forecasting using deep learning model for crude oil trading strategy. <br />•
                Proposed model can get the highest ROI which is{' '}
                <span className="emphasize-text">10% annualized return</span> during 2015 to 2020
                with minimal drawdown along the test periods. While other strategies including Buy &
                Hold and traditional technical indicator gives ann. ROI between -100% to 2.8% only.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">02. Skills</Title>
              <p>
                <code>Data Science</code>, <code>Python</code>,{' '}
                <code>Natural Language Procession (NLP)</code>, <code>Machine Learning</code>,{' '}
                <code>Deep Leraning</code>, <code>Neural Network</code>,{' '}
                <code>Aritificial Intelligent</code>, <code>Web Scraping</code>,{' '}
                <code>Beautiful Soup</code>, <code>HTML</code>, <code>Tensorflow</code>,{' '}
                <code>Keras</code>, <code>PythaiNLP</code>, <code>SKlearn</code>, <code>LSTM</code>,{' '}
                <code>CNN</code>
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
              <Title variant="cardLg">03. Finding</Title>
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
            <Col lg="8" className="achievements-card">
              <Col className="col-12 h-100 achievements-card2">
                <Row>
                  <Col className="col-3 d-flex achievements-icon">
                    <div className="achievements-icon2">
                      <span
                        css={`
                          color: #0fcb81;
                        `}
                      >
                        <RiStockFill />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-9 achievements-desc">
                    <Title variant="cardSm" className="mt-3">
                      10% Annulualized ROI
                    </Title>
                    <Text variant="small">
                      <code>CNN-LSTM</code> could enhance ROI for crude oil trading to 10 %
                      annualized ROI which is the highest comparing to traditional stratigies.
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">04. Motivation</Title>
              <p>
                • Develop deep learning model that can provide a better trading signal than
                traditional technical indicator with a higher return on investment in the long run
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">05. Actions</Title>
              <p>• Pull OHLCV data of WTI crude oil price from Yahoo finance.</p>
              <p>
                • Pre-process data including labeling, technical indicator generation, train-test
                split, data normalization and data transformation
              </p>
              <p>
                • Research on regression deep learning model using <code>CNN-LSTM</code>{' '}
                architecture to provide a trading strategy
              </p>
            </Col>
          </Row>
          <Row
            className="justify-content-center align-items-center d-flex mt-5 mb-4"
            css={`
              p {
                text-align: center;
              }
            `}
          >
            <Col lg="6" className="mb-5">
              <img src={imgResult} alt="" className="img-fluid w-100" />
              <p>
                Figure 1 Trading backtest results from strategy by <code>LSTM-CNN</code> model and
                other traditional strategies
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">06. Results</Title>
              <p>
                • <code>CNN-LSTM</code> could achieve the highest ROI which is 10% annualized return
                during 2015 to 2020. Also, the model can maintain the portfolio value at the top
                rank with minimal drawdown along the test period. In the meanwhile, the Buy&Hold
                strategy gets only -1.4% ann. ROI. The other strategy from the traditional technical
                indicators including RSI, MA, Stochastics, MACD gets ann. ROI between -100% to 2.8%
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
