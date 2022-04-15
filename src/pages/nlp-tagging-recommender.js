import React, { useState, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { Element } from 'react-scroll'

import { Section, Button, Title, Text, Box } from '../components/Core'
import Contact from '../sections/landing1/Contact'
import imgWorkCover from '../assets/img/portfolio/natural-language-processing-nlp.jpg'
import imgModel1 from '../assets/img/portfolio/LSTM-CNN.png'
import imgModel2 from '../assets/img/portfolio/Multi-CNN.png'
import imgResult from '../assets/img/portfolio/nlp-result.png'
import iconBot from '../assets/img/portfolio/bot.png'
import { device } from '../utils'

import { HiArrowNarrowLeft } from 'react-icons/hi'

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
              <Text variant="tag">Data Science</Text>
              <Title variant="secSm" className="my-4">
                Tagging Recommender using Deep Learning Model
              </Title>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">01. Brief</Title>
              <p>
                • Researched focus on <code>NLP</code> to apply{' '}
                <span className="emphasize-text">deep learning model in tagging recommender</span>{' '}
                for Pantip.com, The most famous discussion website in Thailand. <br />• The model
                can achieve <span className="emphasize-text">F1 scores of 0.55</span> for different
                144 tags.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">02. Skills</Title>
              <p>
                <code>Data Science</code>, <code>Python</code>,{' '}
                <code>Natural Language Procession (NLP)</code>, <code>Machine Learning</code>,{' '}
                <code>Deep Learning</code>, <code>Neural Network</code>,{' '}
                <code>Artificial Intelligent</code>, <code>Web Scraping</code>,{' '}
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
                          color: #e8ad11;
                        `}
                      >
                        <img src={iconBot} width="50px" />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-9 achievements-desc">
                    <Title variant="cardSm" className="mt-3">
                      Beat 0.55 F1 Scores
                    </Title>
                    <Text variant="small">
                      • <code>CNN-LSTM</code> gives 0.50 of F1 scores and <code>Multi-CNN</code>{' '}
                      gives 0.55 F1 scores.
                      <br />• Suggest using <code>Multi-CNN</code> model due to higher F1 scores
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">04. Motivation</Title>
              <p>• Apply knowledge in NLP to develop tagging recommender</p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">05. Actions</Title>
              <p>• Web scraping 10,000 topics from pantip.com</p>
              <p>• Pre-process data including cleaning data, labeling, tokenization.</p>
              <p>
                • Proposed 2 deep learning models including <code>LSTM-CNN</code> and{' '}
                <code>Multi-CNN</code>. Vary threshold to identify the highest F1 score. Compare
                results of 2 models
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
            <Col lg="6" className="mb-5">
              <img src={imgModel1} alt="" className="img-fluid w-100" />
              <p className="text-center">
                Figure 1 Architecture of <code>LSTM-CNN</code> model
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
            <Col lg="6" className="mb-5">
              <img src={imgModel2} alt="" className="img-fluid w-100" />
              <p className="text-center">
                Figure 2 Architecture of <code>Multi-CNN</code> model
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">06. Results</Title>
              <p>
                • <code>CNN-LSTM</code> gives 0.50 of F1 scores and <code>Multi-CNN</code> gives
                0.55 F1 scores.
              </p>
              <p>
                • Suggest using <code>Multi-CNN</code> model due to higher F1 scores
              </p>
              <p>
                • Incorrect tags are in the yellow highlight which is still in reasonable relation
                with the content.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
            <Col lg="9" className="mb-5">
              <img src={imgResult} alt="" className="img-fluid w-100" />
              <p className="text-center">Figure 3 Example prediction results from both models</p>
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
