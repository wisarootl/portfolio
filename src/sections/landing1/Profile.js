import React, { useState, useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { Section, Button, Title, Text, Box } from '../../components/Core'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Element } from 'react-scroll'

import chevronLogo from '../../assets/img/profile/chevron.png'
import pttgcLogo from '../../assets/img/profile/pttgc.png'
import chulaLogo from '../../assets/img/profile/chula.png'
import chevronLogoDark from '../../assets/img/profile/chevron-dark.png'
import pttgcLogoDark from '../../assets/img/profile/pttgc-dark.png'
import chulaLogoDark from '../../assets/img/profile/chula-dark.png'

import GlobalContext from '../../context/GlobalContext'

import algoexpertCert from '../../assets/cert/algoexpert.pdf'
import datasciDatacampCert from '../../assets/cert/data_scientist_python.pdf'

// import { device } from '../utils'

const ProfileCard = styled(Box)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0rem !important;
  margin-right: 0rem !important;

  .logo {
    flex: 0 0 72px;
  }

  .profile-card-organization {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .profile-card-heading {
    // padding-right: 0px;
    // padding-left: 0px;
  }

  .profile-card-date p {
    text-align: right;
  }

  p {
    line-height: 1.5;
    font-size: 0.95rem;
    text-align: justify;
    margin-bottom: 0px;
  }

  span.sub-bullet {
    margin-left: 30px;
    display: block;
  }

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

  .link-icon {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.frontShade};
  }
`

const Board = styled(Col)`
  border-color: ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.shadow};
  border-radius: 10px;
  // padding: 2rem !important;
  padding: 1.25rem 1.875rem !important;

  hr {
    border-top-color: ${({ theme }) => theme.colors.frontShade2};
  }
`

const Profile = () => {
  const [active, setActive] = useState(false)
  const gContext = useContext(GlobalContext)

  return (
    <>
      <Section>
        <Container>
          <Element name="experience">
            <Row className="d-flex justify-content-center align-items-center mb-5">
              <Board lg="9">
                <ProfileCard className="row">
                  <div className="col-12 mb-4">
                    <Title variant="cardLg">Experience</Title>
                  </div>
                </ProfileCard>
                <ProfileCard className="row">
                  <div className="col logo">
                    <img
                      src={!gContext.theme.bodyDark ? chevronLogo : chevronLogoDark}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="col p-0">
                    <div className="row">
                      <div className="col-8 profile-card-heading">
                        <Title variant="cardSm" className="profile-card-title">
                          Petroleum Engineer
                        </Title>
                        <Text variant="small" color="text" className="profile-card-organization">
                          <span className="emphasize-text">Chevron</span> : a world leading oil and
                          gas company
                        </Text>
                      </div>
                      <div className="col-4 profile-card-date">
                        <p>2017 – present</p>
                      </div>
                    </div>
                    <Box color="text">
                      <p>
                        • Served as a <span className="emphasize-text">software developer</span> for
                        various software development side-projects to create automation in the
                        working process, data-driven decisions, and optimized profits
                      </p>
                      <p>
                        • Maximize production, project management, manage working resources, and
                        collaborate cross-functional teams
                      </p>
                      <p>
                        • Managed different kinds of projects in operation e.g., well development /
                        abandonment / intervention
                        <br />
                        <span className="sub-bullet">
                          • Served as a project manager to coordinate cross-functional team together
                          and deliver the highest values results for the company in the aspect of
                          safety, reputation, and profit
                        </span>
                      </p>
                    </Box>
                  </div>
                </ProfileCard>
                <hr></hr>
                <ProfileCard className="row">
                  <div className="col logo">
                    <img
                      src={!gContext.theme.bodyDark ? chevronLogo : chevronLogoDark}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="col p-0">
                    <div className="row">
                      <div className="col-8 profile-card-heading">
                        <Title variant="cardSm" className="profile-card-title">
                          Petroleum Engineer Intern
                        </Title>
                        <Text variant="small" color="text" className="profile-card-organization">
                          <span className="emphasize-text">Chevron</span>
                        </Text>
                      </div>
                      <div className="col-4 profile-card-date">
                        <p>2015 – 2016</p>
                      </div>
                    </div>
                  </div>
                </ProfileCard>
                <hr></hr>
                <ProfileCard className="row">
                  <div className="col logo">
                    <img
                      src={!gContext.theme.bodyDark ? pttgcLogo : pttgcLogoDark}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="col p-0">
                    <div className="row">
                      <div className="col-8 profile-card-heading">
                        <Title variant="cardSm" className="profile-card-title">
                          Research Assistant
                        </Title>
                        <Text variant="small" color="text" className="profile-card-organization">
                          <span className="emphasize-text">PTT Global Chemical</span> : a Thailand
                          leading petrochemical company
                        </Text>
                      </div>
                      <div className="col-4 profile-card-date">
                        <p>2008 – 2012</p>
                      </div>
                    </div>
                  </div>
                </ProfileCard>
              </Board>
            </Row>
          </Element>
          <Element name="education">
            <Row className="d-flex justify-content-center align-items-center mb-5">
              <Board lg="9">
                <ProfileCard className="row">
                  <div className="col-12 mb-4">
                    <Title variant="cardLg">Education</Title>
                  </div>
                </ProfileCard>
                <ProfileCard className="row">
                  <div className="col logo">
                    <img
                      src={!gContext.theme.bodyDark ? chulaLogo : chulaLogoDark}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="col p-0">
                    <div className="row">
                      <div className="col-8 profile-card-heading">
                        <Title variant="cardSm" className="profile-card-title">
                          M.Sc. in Computer Science
                        </Title>
                        <Text variant="small" color="text" className="profile-card-organization">
                          <span className="emphasize-text">Chulalongkorn University</span>
                        </Text>
                      </div>
                      <div className="col-4 profile-card-date">
                        <p>2020 – 2022</p>
                      </div>
                    </div>
                  </div>
                </ProfileCard>
                <hr></hr>
                <ProfileCard className="row">
                  <div className="col logo">
                    <img
                      src={!gContext.theme.bodyDark ? chulaLogo : chulaLogoDark}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="col p-0">
                    <div className="row">
                      <div className="col-8 profile-card-heading">
                        <Title variant="cardSm" className="profile-card-title">
                          M.Eng. in Petrolrum Engineering
                        </Title>
                        <Text variant="small" color="text" className="profile-card-organization">
                          <span className="emphasize-text">Chulalongkorn Univerisity</span>
                        </Text>
                      </div>
                      <div className="col-4 profile-card-date">
                        <p>2014 – 2016</p>
                      </div>
                    </div>
                  </div>
                </ProfileCard>
                <hr></hr>
                <ProfileCard className="row">
                  <div className="col logo">
                    <img
                      src={!gContext.theme.bodyDark ? chulaLogo : chulaLogoDark}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="col p-0">
                    <div className="row">
                      <div className="col-8 profile-card-heading">
                        <Title variant="cardSm" className="profile-card-title">
                          B.Sc. in Chemical Engineering
                        </Title>
                        <Text variant="small" color="text" className="profile-card-organization">
                          <span className="emphasize-text">Chulalongkorn University</span> (1
                          <sup>st</sup> Hons, Top 1 in the class)
                        </Text>
                      </div>
                      <div className="col-4 profile-card-date">
                        <p>2012 – 2014</p>
                      </div>
                    </div>
                  </div>
                </ProfileCard>
              </Board>
            </Row>
          </Element>
          <Element name="skills">
            <Row className="d-flex justify-content-center align-items-center mb-5">
              <Board lg="9">
                <ProfileCard className="row">
                  <div className="col-12 mb-4">
                    <Title variant="cardLg">Skills</Title>
                  </div>
                </ProfileCard>
                <ProfileCard className="row">
                  <div className="col">
                    <p>
                      • Proficient in <code>Python</code> (<code>Tensorflow</code>,{' '}
                      <code>Keras</code>, <code>Scikit-Learn</code>, <code>Pandas</code>,{' '}
                      <code>Numpy</code>, <code>Matplotlib</code>), <code>Deep Learning</code>,{' '}
                      <code>Artificial Intelligent</code>, <code>Machine Learning</code>,{' '}
                      <code>Tree-based model</code>, <code>NLP</code> and <code>Time Series</code>
                    </p>
                    <p>
                      • Fluent in <code>English</code> (TOEFL ITP: 560/677, TOEIC: 925/990)
                    </p>
                    <p>
                      • Good <code>project management</code> and <code>team working</code> skills
                      with experiences to manage different kinds of projects in Oil & Gas operation
                      including infill development projects, asset retirement projects, and
                      resources management.
                    </p>
                    <p>
                      • Other computer skills e.g. <code>JavaScript</code>, <code>SQL</code>,{' '}
                      <code>React</code>, <code>Node.js</code>, <code>HTML</code>, <code>CSS</code>,{' '}
                      <code>VBA</code> and <code>R</code>
                    </p>
                  </div>
                </ProfileCard>
              </Board>
            </Row>
          </Element>
          <Element name="awards">
            <Row className="d-flex justify-content-center align-items-center mb-5">
              <Board lg="9">
                <ProfileCard className="row">
                  <div className="col-12 mb-4">
                    <Title variant="cardLg">Awards / Certifications</Title>
                  </div>
                </ProfileCard>
                <ProfileCard className="row">
                  <div className="col">
                    <p>
                      •{' '}
                      <a href={algoexpertCert} target="_blank">
                        <span className="emphasize-text">Algoexpoert</span>{' '}
                        <FaExternalLinkAlt className="link-icon" />
                      </a>{' '}
                      (2022) : solved problem related to <code>Algorithms</code> and{' '}
                      <code>Data Struces</code> for 200+ questions. In addition, I continuously
                      these kind of questions on leetcode.com to sharpen my <code>Algorithms</code>,{' '}
                      <code>Data Struces</code> and <code>Coding</code> skills.
                    </p>
                    <p>
                      • Passed{' '}
                      <a href="https://basno.com/cy8buily" target="_blank">
                        <span className="emphasize-text">CFA I</span>{' '}
                        <FaExternalLinkAlt className="link-icon" />
                      </a>{' '}
                      (2021) : Chartered Financial Analyst I program is exam that test the
                      fundamentals finace including Statistics, Quantitative Finance, Economics,
                      Portfolio Manangement, Equity Investment, Bond Investment, Derivatives
                      Investment, Financial Reporting and Analysis
                    </p>
                    <p>
                      •{' '}
                      <a href={datasciDatacampCert} target="_blank">
                        <span className="emphasize-text">Data Scientist with Python Track</span>{' '}
                        <FaExternalLinkAlt className="link-icon" />
                      </a>{' '}
                      from <span className="emphasize-text">Data Camp</span> (2020) : 88 hrs.{' '}
                      <code>Python</code> training course for <code>Data Science</code>
                    </p>
                  </div>
                </ProfileCard>
              </Board>
            </Row>
          </Element>
        </Container>
      </Section>
    </>
  )
}
export default Profile
