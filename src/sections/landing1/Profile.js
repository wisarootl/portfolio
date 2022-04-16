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
import theCompleteWebDevZTMCert from '../../assets/cert/complete_web_dev_ztm.pdf'
import toefl from '../../assets/cert/TOEFL_2020.pdf'
import toeic from '../../assets/cert/TOEIC_2020.pdf'
import { device } from '../../utils'

const ProfileCard = styled(Box)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0rem !important;
  margin-right: 0rem !important;

  .logo {
    flex: 0 0 52px;
    padding-right: 5px;
    padding-left: 5px;
    @media ${device.md} {
      flex: 0 0 72px;
      padding-right: 15px;
      padding-left: 15px;
    }
  }

  .padding-dynamic {
    padding: 0px;
    @media ${device.md} {
      padding-right: 15px;
      padding-left: 15px;
    }
  }

  .profile-card-title {
    margin-bottom: 0.3rem;
  }

  .logo-position-row {
    padding-left: 0px;
    padding-right: 0px;
    margin-right: 0px;
    margin-left: 0px;
    margin-bottom: 0.5rem;
  }

  .description-row {
    padding-left: 0px;
    padding-right: 0px;
    margin-right: 0px;
    margin-left: 0px;
    // margin-bottom: 1rem;
  }

  .logo-bottom {
    flex: 0 0 0px;
    padding-right: 0px;
    padding-left: 0px;
    @media ${device.md} {
      flex: 0 0 72px;
      padding-right: 15px;
      padding-left: 15px;
    }
  }

  .description-col {
    padding-right: 0px;
    padding-left: 0px;
  }

  .profile-card-organization {
    font-size: 0.9rem;
  }

  .profile-card-heading {
    // padding-right: 0px;
    // padding-left: 0px;
  }

  .profile-card-date p {
    text-align: left;

    @media (min-width: 576px) {
      text-align: right;
    }
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

  .link-icon {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.frontShade};
    position: relative;
    bottom: 1px;
  }
`

const Board = styled(Col)`
  border-color: ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.shadow};
  border-radius: 10px;
  padding: 1.25rem 15px 2.2rem 15px !important;
  @media ${device.sm} {
    padding: 1.25rem 1.875rem 2.2rem 1.875rem !important;
  }

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
                  {/* <div className="col-12 mb-4 padding-dynamic"> */}
                  <div className="col-12 padding-dynamic">
                    <Title variant="cardLg">Experience</Title>
                  </div>
                </ProfileCard>
                <ProfileCard className="row">
                  <div className="row logo-position-row w-100">
                    <div className="col logo">
                      <img
                        src={!gContext.theme.bodyDark ? chevronLogo : chevronLogoDark}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="col p-0">
                      <div className="row">
                        <div className="col-12 col-sm-8 profile-card-heading">
                          <Title variant="cardSm" className="profile-card-title">
                            Petroleum Engineer
                          </Title>
                          <Text variant="small" color="text" className="profile-card-organization">
                            <span className="emphasize-text">Chevron</span> : a world-leading oil
                            and gas company
                          </Text>
                        </div>
                        <div className="col-12 col-sm-4 profile-card-date">
                          <p>2017 – present</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row description-row w-100">
                    <div className="col logo-bottom"></div>
                    <Box className="col description-col" color="text">
                      <p>
                        • Served as a <span className="emphasize-text">software developer</span> for
                        various software development side-projects to create automation in the
                        working process, data-driven decisions, and optimized profits
                      </p>
                      <p>
                        • Served as <span className="emphasize-text">project manager</span> for
                        different kinds of projects in oil & gas field operation e.g., well
                        development / abandonment / intervention
                        {/* <span className="sub-bullet">
                          • Served as a project manager to coordinate cross-functional team together
                          and deliver the highest values results for the company in the aspect of
                          safety, reputation, and profit
                        </span> */}
                      </p>
                      <p>
                        • Maximized production, managed project & working resources and coordinated
                        cross-functional teams
                      </p>
                    </Box>
                  </div>
                </ProfileCard>
                <hr />
                <ProfileCard className="row">
                  <div className="row logo-position-row w-100">
                    <div className="col logo">
                      <img
                        src={!gContext.theme.bodyDark ? chevronLogo : chevronLogoDark}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="col p-0">
                      <div className="row">
                        <div className="col-12 col-sm-8 profile-card-heading">
                          <Title variant="cardSm" className="profile-card-title">
                            Petroleum Engineer Intern
                          </Title>
                          <Text variant="small" color="text" className="profile-card-organization">
                            <span className="emphasize-text">Chevron</span>
                          </Text>
                        </div>
                        <div className="col-12 col-sm-4 profile-card-date">
                          <p>2015 – 2016</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ProfileCard>
                <hr />
                <ProfileCard className="row">
                  <div className="row logo-position-row w-100">
                    <div className="col logo">
                      <img
                        src={!gContext.theme.bodyDark ? pttgcLogo : pttgcLogoDark}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="col p-0">
                      <div className="row">
                        <div className="col-12 col-sm-8 profile-card-heading">
                          <Title variant="cardSm" className="profile-card-title">
                            Research Assistant
                          </Title>
                          <Text variant="small" color="text" className="profile-card-organization">
                            <span className="emphasize-text">PTT Global Chemical</span> : a leading
                            petrochemical company in Thailand
                          </Text>
                        </div>
                        <div className="col-12 col-sm-4 profile-card-date">
                          <p>2012 – 2014</p>
                        </div>
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
                  {/* <div className="col-12 mb-4 padding-dynamic"> */}
                  <div className="col-12 padding-dynamic">
                    <Title variant="cardLg">Education</Title>
                  </div>
                </ProfileCard>
                <ProfileCard className="row">
                  <div className="row logo-position-row w-100">
                    <div className="col logo">
                      <img
                        src={!gContext.theme.bodyDark ? chulaLogo : chulaLogoDark}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="col p-0">
                      <div className="row">
                        <div className="col-12 col-sm-8 profile-card-heading">
                          <Title variant="cardSm" className="profile-card-title">
                            M.Sc. in Computer Science
                          </Title>
                          <Text variant="small" color="text" className="profile-card-organization">
                            <span className="emphasize-text">Chulalongkorn Univerisity</span>{' '}
                            <br className="d-flex d-md-none" />
                            (Merit scholarship from Chevron)
                          </Text>
                        </div>
                        <div className="col-12 col-sm-4 profile-card-date">
                          <p>2020 – 2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ProfileCard>
                <hr />
                <ProfileCard className="row">
                  <div className="row logo-position-row w-100">
                    <div className="col logo">
                      <img
                        src={!gContext.theme.bodyDark ? chulaLogo : chulaLogoDark}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="col p-0">
                      <div className="row">
                        <div className="col-12 col-sm-8 profile-card-heading">
                          <Title variant="cardSm" className="profile-card-title">
                            M.Eng. in Petrolrum Engineering
                          </Title>
                          <Text variant="small" color="text" className="profile-card-organization">
                            <span className="emphasize-text">Chulalongkorn Univerisity</span>{' '}
                            <br className="d-flex d-md-none" />
                            (Merit scholarship from Chevron)
                          </Text>
                        </div>
                        <div className="col-12 col-sm-4 profile-card-date">
                          <p>2014 – 2016</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ProfileCard>
                <hr />
                <ProfileCard className="row">
                  <div className="row logo-position-row w-100">
                    <div className="col logo">
                      <img
                        src={!gContext.theme.bodyDark ? chulaLogo : chulaLogoDark}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="col p-0">
                      <div className="row">
                        <div className="col-12 col-sm-8 profile-card-heading">
                          <Title variant="cardSm" className="profile-card-title">
                            B.Sc. in Chemical Engineering
                          </Title>
                          <Text variant="small" color="text" className="profile-card-organization">
                            <span className="emphasize-text">Chulalongkorn University</span>{' '}
                            <br className="d-flex d-md-none" />
                            (1
                            <sup>st</sup> Hons, Top 1 of the class)
                          </Text>
                        </div>
                        <div className="col-12 col-sm-4 profile-card-date">
                          <p>2008 – 2012</p>
                        </div>
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
                  {/* <div className="col-12 mb-4 padding-dynamic"> */}
                  <div className="col-12 padding-dynamic">
                    <Title variant="cardLg">Skills</Title>
                  </div>
                </ProfileCard>
                <ProfileCard className="row">
                  <div className="col padding-dynamic">
                    <p>
                      • Proficient in <code>Python</code> (<code>Tensorflow</code>,{' '}
                      <code>Keras</code>, <code>Scikit-Learn</code>, <code>Pandas</code>,{' '}
                      <code>Numpy</code>, <code>Matplotlib</code>), <code>Deep Learning</code>,{' '}
                      <code>Artificial Intelligent</code>, <code>Machine Learning</code>,{' '}
                      <code>Tree-based model</code>, <code>NLP</code> and <code>Time Series</code>
                    </p>
                    <p>
                      • Fluent in <code>English</code> (
                      <a href={toefl} target="_blank">
                        <span className="emphasize-text">TOEFL ITP: 560/677</span>{' '}
                        <FaExternalLinkAlt className="link-icon" />
                      </a>
                      ,{' '}
                      <a href={toeic} target="_blank">
                        <span className="emphasize-text">TOEIC: 925/990</span>{' '}
                        <FaExternalLinkAlt className="link-icon" />
                      </a>
                      )
                    </p>
                    <p>
                      • Good <code>project management</code> and <code>team working</code> skills
                      with experience to manage different kinds of projects in Oil & Gas field
                      operations including infill development projects, asset retirement projects,
                      and resources management.
                    </p>
                    <p>
                      • Other computer skills e.g. <code>Javascript</code>, <code>SQL</code>,{' '}
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
                  {/* <div className="col-12 mb-4 padding-dynamic"> */}
                  <div className="col-12 padding-dynamic">
                    <Title variant="cardLg">Awards / Certifications</Title>
                  </div>
                </ProfileCard>
                <ProfileCard className="row">
                  <div className="col padding-dynamic">
                    <p>
                      •{' '}
                      <a href={theCompleteWebDevZTMCert} target="_blank">
                        <span className="emphasize-text">The Complete Web Developer</span>{' '}
                        <FaExternalLinkAlt className="link-icon" />
                      </a>{' '}
                      from <span className="emphasize-text">Zero to Mastery</span> (2022) : 38 hrs.
                      practical training for <code>Full Stack</code> web development including{' '}
                      <code>HTML</code>, <code>CSS</code>, <code>Responsive Design</code>,{' '}
                      <code>Javascript</code>, <code>React</code>, <code>Git</code>,{' '}
                      <code>Node.js</code>, <code>Express.js</code>, <code>NPM</code>,{' '}
                      <code>PostgresSQL</code>, <code>SQL</code>, <code>Security</code>,{' '}
                      <code>Deployment</code>
                    </p>
                    <p>
                      •{' '}
                      <a href={algoexpertCert} target="_blank">
                        <span className="emphasize-text">Algoexpert</span>{' '}
                        <FaExternalLinkAlt className="link-icon" />
                      </a>{' '}
                      (2022) : solved problems related to <code>Algorithms</code> and{' '}
                      <code>Data Structure</code> for 200+ questions. In addition, I am continuously
                      solving this kind of questions on leetcode.com to sharpen my{' '}
                      <code>Algorithms</code>, <code>Data Structure</code>,{' '}
                      <code>Problem Solving</code> and <code>Coding</code> skills.
                    </p>
                    <p>
                      • Passed{' '}
                      <a href="https://basno.com/cy8buily" target="_blank">
                        <span className="emphasize-text">CFA I</span>{' '}
                        <FaExternalLinkAlt className="link-icon" />
                      </a>{' '}
                      (2021) : Chartered Financial Analyst I program is exam that tests the
                      knowledge in <code>Finance</code> including <code>Statistics</code>,{' '}
                      <code>Quantitative Finance</code>, <code>Economics</code>,{' '}
                      <code>Portfolio Management</code>, <code>Equity Investment</code>,{' '}
                      <code>Bond Investment</code>, <code>Derivatives Investment</code>,{' '}
                      <code>Financial Reporting and Analysis</code>
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
