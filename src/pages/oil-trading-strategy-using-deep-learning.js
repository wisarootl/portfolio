import React, { useState, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { Element } from 'react-scroll'

import { Section, Button, Title, Text, Box } from '../components/Core'
import Contact from '../sections/landing1/Contact'
import imgWorkCover from '../assets/img/portfolio/deep-learning-for-trading.jpg'
import imgResult from '../assets/img/portfolio/oil-trading-result.png'
import { device, breakpoints } from '../utils'

import { FaExternalLinkAlt } from 'react-icons/fa'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { RiStockFill } from 'react-icons/ri'

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
                • Conducted research on <code>time series</code>{' '}
                <span className="emphasize-text">📈</span> forecasting models using{' '}
                <code>deep learning</code> <span className="emphasize-text">🤖</span> techniques for
                a crude oil trading strategy, and developed a model that achieved a remarkable{' '}
                <span className="emphasize-text">✅17.8% annualized return on investment</span>.
              </p>
              <p>
                •{' '}
                <a
                  href="http://www.jait.us/index.php?m=content&c=index&a=show&catid=222&id=1278"
                  target="_blank"
                >
                  Published 🔥 the research in Journal of Advances in Information Technology
                  (Lertthaweedech et al., 2022) <FaExternalLinkAlt className="link-icon" />
                </a>
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">02. Skills</Title>
              <p>
                <code>Data Science</code>, <code>Python</code>, <code>Machine Learning</code>,{' '}
                <code>Deep Learning</code>, <code>Time Series</code>, <code>Neural Network</code>,{' '}
                <code>Artificial Intelligent</code>, <code>Finance</code>, <code>Publication</code>,{' '}
                <code>Tensorflow</code>, <code>Keras</code>,{' '}
                <code>Long Short-Term Memory (LSTM)</code>,{' '}
                <code>Convolutional Neural Network (CNN)</code>
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
            <Col lg="6" className="achievements-card">
              <Col className="col-12 h-100 achievements-card2">
                <Row>
                  <Col className="col-12 d-flex achievements-icon" lg="12" sm="3">
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
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      17.8% Annualized ROI
                    </Title>
                    <Text variant="small">
                      Using the proposed <code>LSTM-CNN</code> model, our research found that a
                      crude oil trading strategy can achieve an annualized ROI of 17.8%. This is the
                      highest ROI compared to traditional strategies, demonstrating the
                      effectiveness of deep learning models in time series forecasting for trading.
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
                The motivation of this research is to create a deep learning model that can offer
                superior trading signals compared to traditional technical indicators and generate
                higher long-term return on investment.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">05. Actions</Title>
              <p>• Obtained the OHLCV data of WTI crude oil price from Yahoo finance.</p>
              <p>
                • Conducted data pre-processing, which included labeling, generating technical
                indicators, splitting data into train and test sets, and normalizing and
                transforming data.
              </p>
              <p>
                • Researched various deep learning models such as <code>CNN</code>,{' '}
                <code>LSTM</code>, <code>CNN-LSTM</code> and <code>LSTM-CNN</code>
                architectures to provide a trading signal and compared the results with traditional
                strategies such as RSI, MACD, SMA, Stochastics, and Buy&Hold.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
            <Col lg="6" className="mb-5">
              <img src={imgResult} alt="" className="img-fluid w-100" />
              <p className="text-center">Figure 1: ROI of all trading strategies</p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">06. Results</Title>
              <p>
                The results showed that the combination of both <code>CNN</code>
                and <code>LSTM</code> layers, either in <code>CNN-LSTM</code> or{' '}
                <code>LSTM-CNN</code> order, outperformed the single CNN or LSTM models and
                traditional trading strategies such as buy and hold, RSI, Stochastics, MACD, and
                SMA. The <code>LSTM-CNN</code> model provided{' '}
                <span className="emphasize-text">
                  the highest annualized ROI at 17.8% and Sharpe ratio at 0.62
                </span>
                . These findings suggest that the combination of <code>CNN</code> and{' '}
                <code>LSTM</code> layers could enhance both prediction and trading performance for
                crude oil price prediction.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">07. Publication</Title>
              <p>
                <a
                  href="http://www.jait.us/index.php?m=content&c=index&a=show&catid=222&id=1278"
                  target="_blank"
                >
                  W. Lertthaweedech, P. Kantavat and B. Kijsirikul, "Effective Crude Oil Trading
                  Techniques Using Long Short-Term Memory and Convolution Neural Networks," in
                  Journal of Advances in Information Technology, vol. 13, no. 6, pp. 645-651, Dec.
                  2022, doi: 10.12720/jait.13.6.645-651. <FaExternalLinkAlt className="link-icon" />
                </a>
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
