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
import { device, breakpoints } from '../utils'

import { HiArrowNarrowLeft } from 'react-icons/hi'

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
                Tagging Recommender using Deep Learning Model
              </Title>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">01. Brief</Title>
              <p>
                • Researched focus on <code>NLP</code> <span className="emphasize-text">🔤</span> to
                apply{' '}
                <span className="emphasize-text">
                  deep learning 🤖 model in tagging recommender
                </span>{' '}
                for Pantip.com, the most famous discussion website in Thailand. <br />• The model
                can achieve <span className="emphasize-text">✅F1 scores of 0.55</span> for 144
                unique tags.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">02. Skills</Title>
              <p>
                <code>Data Science</code>, <code>Python</code>,{' '}
                <code>Natural Language Processing (NLP)</code>, <code>Machine Learning</code>,{' '}
                <code>Deep Learning</code>, <code>Neural Network</code>,{' '}
                <code>Artificial Intelligent</code>, <code>Web Scraping</code>,{' '}
                <code>Beautiful Soup</code>, <code>HTML</code>, <code>Tensorflow</code>,{' '}
                <code>Keras</code>, <code>PythaiNLP</code>, <code>Scikit-learn (SKlearn)</code>,{' '}
                <code>Long Short-Term Memory (LSTM)</code>,{' '}
                <code>Convolutional Neural Networks (CNN)</code>
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
                          color: #e8ad11;
                        `}
                      >
                        <img src={iconBot} width="50px" />
                      </span>
                    </div>
                  </Col>
                  <Col className="col-12 achievements-desc" lg="12" sm="9">
                    <Title variant="cardSm" className="mt-3">
                      Beat 0.55 F1 Scores
                    </Title>
                    <Text variant="small">
                      The <code>CNN-LSTM</code> model achieved an F1 score of 0.50, while the{' '}
                      <code>Multi-CNN</code> model achieved 0.55 for the 144 unique tags. Based on
                      this finding, we suggest using the <code>Multi-CNN</code> model due to its
                      higher F1 score.
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
                The main motivation for this project was to apply knowledge in natural language
                processing (NLP) and deep learning to develop a tagging recommender for a popular
                discussion website in Thailand. This recommender aims to improve the user experience
                by suggesting relevant tags for new discussion topics.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">05. Actions</Title>
              <p>• Web scraping 10,000 topics from pantip.com</p>
              <p>
                • The scraped data was then pre-processed to clean it, label it, and tokenize it to
                prepare it for use in deep learning models.
              </p>
              <p>
                • Two deep learning models, <code>LSTM-CNN</code> and <code>Multi-CNN</code>, were
                proposed to develop the tagging recommender. The architecture design of both models
                is shown in Figure 1 for <code>LSTM-CNN</code> and Figure 2 for{' '}
                <code>Multi-CNN</code>.
              </p>
              <p>
                • The threshold of the multi-classification was varied to identify the highest F1
                score, and the results of both models were compared.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
            <Col lg="6" className="mb-5">
              <img src={imgModel1} alt="" className="img-fluid w-100" />
              <p className="text-center">
                Figure 1: Architecture of <code>LSTM-CNN</code> model
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
            <Col lg="6" className="mb-5">
              <img src={imgModel2} alt="" className="img-fluid w-100" />
              <p className="text-center">
                Figure 2: Architecture of <code>Multi-CNN</code> model
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mb-4">
            <Col lg="9">
              <Title variant="cardLg">06. Results</Title>
              <p>
                The <code>Multi-CNN</code> model achieved an{' '}
                <span className="emphasize-text">F1 score of 0.55</span>, which was higher than the{' '}
                <code>CNN-LSTM</code> model's F1 score of 0.50. Based on this result, we suggest
                using the <code>Multi-CNN</code> model. Figure 3 shows example prediction results
                from both models, highlighting incorrect tags in yellow, which are still in
                reasonable relation to the content.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center d-flex mt-5 mb-4">
            <Col lg="9" className="mb-5">
              <img src={imgResult} alt="" className="img-fluid w-100" />
              <p className="text-center">Figure 3: Example prediction results from both models</p>
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
