import React, { useState, useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { Section, Button, Title, Text, Box } from '../../components/Core'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Element } from 'react-scroll'

import honestLogo from '../../assets/img/profile/honest.png'
import chevronLogo from '../../assets/img/profile/chevron.png'
import pttgcLogo from '../../assets/img/profile/pttgc.png'
import chulaLogo from '../../assets/img/profile/chula.png'

import honestLogoDark from '../../assets/img/profile/honest-dark.png'
import chevronLogoDark from '../../assets/img/profile/chevron-dark.png'
import pttgcLogoDark from '../../assets/img/profile/pttgc-dark.png'
import chulaLogoDark from '../../assets/img/profile/chula-dark.png'

import GlobalContext from '../../context/GlobalContext'
import { device } from '../../utils'

// cert.
import mlexpert_2022 from '../../assets/cert/2022_mlexpert.pdf'
import algoexpert_2022 from '../../assets/cert/2022_algoexpert.pdf'
import data_scientist_python_2020 from '../../assets/cert/2020_data_scientist_python.pdf'
import complete_web_dev_ztm_2022 from '../../assets/cert/2022_complete_web_dev_ztm.pdf'
import toefl from '../../assets/cert/2020_TOEFL.pdf'
import toeic from '../../assets/cert/2020_TOEIC.pdf'
import git_github_2022 from '../../assets/cert/2022_git_github.pdf'
import python_oop_2022 from '../../assets/cert/2022_python_oop.pdf'
import programming_expert from '../../assets/cert/2022_programming_expert.pdf'
import functional_programming_2022 from '../../assets/cert/2022_functional_programming.pdf'
import design_patterns_2022 from '../../assets/cert/2022_design_patterns.pdf'
import system_design_2022 from '../../assets/cert/2022_system_design.pdf'
import mlds_bootcamp_2022 from '../../assets/cert/2022_mlds_bootcamp.pdf'
import hyperparameter_optimization_2022 from '../../assets/cert/2022_hyperparameter_optimization.pdf'
import feature_selection_2022 from '../../assets/cert/2022_feature_selection.pdf'
import feature_engineering_2022 from '../../assets/cert/2022_feature_engineering.pdf'
import docker_kubernetes_2022 from '../../assets/cert/2022_docker_kubernetes.pdf'
import devops_terraform_2022 from '../../assets/cert/2022_devops_terraform.pdf'
import pyspark_2022 from '../../assets/cert/2022_pyspark.pdf'
import clean_code_2022 from '../../assets/cert/2022_clean_code.pdf'
import google_cloud_digital_leader_training_2022 from '../../assets/cert/2022_google_cloud_digital_leader_training.pdf'
import database_engineering_2022 from '../../assets/cert/2022_database_engineering.pdf'
import sql_and_databases_2022 from '../../assets/cert/2022_sql_and_databases.pdf'
import mlops_2022 from '../../assets/cert/2022_mlops.pdf'
import cs50x_2023 from '../../assets/cert/2023_cs50x.pdf'
import frontend_expert_2023 from '../../assets/cert/2023_frontend_expert.pdf'
import mls_2023 from '../../assets/cert/2023_machine_learning_specialization.pdf'

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

  .profile-card-heading p {
    display: inline;
  }

  .profile-card-date p {
    text-align: left;

    @media (min-width: 768px) {
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
  const py_section = ['30px', null, '35px', '40px']

  return (
    <>
      <Section py={py_section}>
        <Container>
          <Element name="experience">
            <Row className="d-flex justify-content-center align-items-center">
              <Board lg="9">
                <ProfileCard className="row">
                  <div className="col-12 padding-dynamic">
                    <Title variant="cardLg">Experience</Title>
                  </div>
                </ProfileCard>
                <ProfileCard className="row">
                  <div className="row logo-position-row w-100">
                    <div className="col logo">
                      <img
                        src={!gContext.theme.bodyDark ? honestLogo : honestLogoDark}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="col p-0">
                      <div className="row">
                        <div className="col-12 col-xl-7 profile-card-heading">
                          <Title variant="cardSm" className="profile-card-title d-inline">
                            Senior Data Scientist
                          </Title>
                        </div>
                        <div className="col-12 col-xl-5 d-none d-xl-block profile-card-date">
                          <p>{/*Somewhere | */}Jul 2022 – present</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 profile-card-heading">
                          <Text variant="small" color="text" className="profile-card-organization">
                            <span className="emphasize-text">Honest Technology</span> : a
                            data-driven neobank start-up with top-tier tech standards, advanced
                            AI/ML and DevOps practices.
                          </Text>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 d-xl-none profile-card-heading">
                          <p>{/*Somewhere | */}Jul 2022 – present</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row description-row w-100">
                    <div className="col logo-bottom"></div>
                    <Box className="col description-col" color="text">
                      <p>
                        • Served as a <span class="emphasize-text">full-stack data scientist</span>{' '}
                        to design, build, and research{' '}
                        <span class="emphasize-text">end-to-end</span> batch processing{' '}
                        <span class="emphasize-text">machine learning pipelines</span>, which
                        included data cleaning, preprocessing, model research, validation,
                        deployment, and monitoring.
                      </p>
                      <p>
                        • Initiated advanced labeling techniques (<code>statistics</code>,
                        <code>Markov chain</code>, <code>soft labeling</code>, and
                        <code>active learning</code>) to synthesize default labels for credit
                        <code>risk model</code>, facilitating faster convergence in small and
                        short-duration datasets. This expedited model launching by achieving a
                        notable <span class="emphasize-text">7% improvement in AUC</span> during the
                        early launch phase, crucial for the company's fundraising success and{' '}
                        <span class="emphasize-text">securing a $20 million investment</span>.
                      </p>
                      <p>
                        • Conducted interviews, actively contributing to the <code>hiring</code>{' '}
                        process fostering <span class="emphasize-text">team growth</span> with
                        stability and high performance.
                      </p>
                      <p>
                        • Developed a <span class="emphasize-text">highly scalable</span> and{' '}
                        <span class="emphasize-text">easily deployable</span> <code>Python</code>{' '}
                        framework for <code>machine learning</code> research, abstracting various
                        tools, including <code>Scikit-learn</code>, <code>TensorFlow</code>,{' '}
                        <code>Optuna</code>, <code>Imbalanced-learn</code>, <code>XGBoost</code>,{' '}
                        <code>Seaborn</code>, <code>Matplotlib</code>, and others. Includes{' '}
                        <span class="emphasize-text">composable</span> core ML components for{' '}
                        <code>preprocessing</code>, <code>(un)supervised learning</code>,
                        <code>deep learning</code>, and <code>recommendation systems</code>, plus
                        robust error handling capabilities in production. Streamlining research and
                        deployment, it achieves estimated{' '}
                        <span class="emphasize-text">time savings of over 50%</span>, with a
                        flawless deployment record—
                        <span class="emphasize-text">zero P1 reported incidents</span> in
                        production.
                        <a
                          href="https://wisarootl.github.io/portfolio/ml-research-framework"
                          target="_blank"
                        >
                          <i class="fa-solid fa-up-right-from-square link-icon"></i>
                        </a>
                      </p>
                      <p>
                        • Cultivated
                        <span class="emphasize-text">secure</span>,
                        <span class="emphasize-text">scalable</span>,
                        <span class="emphasize-text">maintainable</span> and{' '}
                        <span class="emphasize-text">reliable</span> codebases through adherence to
                        strict guidelines for <code>infrastructure as code</code>,{' '}
                        <code>continuous integration&shy;/&shy;deployment</code>,{' '}
                        <code>unit/integral testing</code>,{' '}
                        <code>software development&shy;/&shy;coding best practices</code> and{' '}
                        <code>security</code>, using modern tools such as{' '}
                        <code>Terraform Cloud</code>, <code>CI/CD pipelines</code>,{' '}
                        <code>GitHub Actions</code>, <code>code analysis</code> and{' '}
                        <code>security&shy;/&shy;vulnerability tools</code>.
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
                        <div className="col-12 col-xl-7 profile-card-heading">
                          <Title variant="cardSm" className="profile-card-title d-inline">
                            Production Engineer
                          </Title>
                          <p>
                            {' '}
                            (with <span className="emphasize-text d-inline">Data Science</span>{' '}
                            experience)
                          </p>
                        </div>
                        <div className="col-12 col-xl-5 d-none d-xl-block profile-card-date">
                          <p>{/*Somewhere | */}Jul 2017 – Apr 2022</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 profile-card-heading">
                          <Text variant="small" color="text" className="profile-card-organization">
                            <span className="emphasize-text">Chevron</span> : a world-leading oil
                            and gas company
                          </Text>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 d-xl-none profile-card-heading">
                          <p>{/*Somewhere | */}Jul 2017 – Apr 2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row description-row w-100">
                    <div className="col logo-bottom"></div>
                    <Box className="col description-col" color="text">
                      <p>
                        • Designed and developed{' '}
                        <span className="emphasize-text">algorithm-driven software</span> using{' '}
                        <code>Python</code>, <code>VBA</code>, and <code>linear programming</code>{' '}
                        for production <code>optimization</code>, resulting in a{' '}
                        <span className="emphasize-text">15.2% increase in oil production</span>,{' '}
                        <span className="emphasize-text">
                          $15.3 million/year in additional revenue
                        </span>
                        , and improved workforce efficiency with reduced errors.{' '}
                        <Link to="/production-optimization" color="text" target="_blank">
                          <FaExternalLinkAlt className="link-icon" />
                        </Link>
                      </p>
                      <p>
                        • Led the development of a{' '}
                        <span className="emphasize-text">software application</span> using{' '}
                        <code>Python</code> and <code>VBA</code> to enable <code>scalable</code>{' '}
                        pipeline network modeling,{' '}
                        <span className="emphasize-text">
                          cutting investment costs by $49.8 million
                        </span>
                        .{' '}
                        <Link to="/pipeline-network-modelling" color="text" target="_blank">
                          <FaExternalLinkAlt className="link-icon" />
                        </Link>
                      </p>
                      <p>
                        • Demonstrated exceptional <code>project management</code> skills in
                        coordinating cross-functional teams for various operational projects driving{' '}
                        <span className="emphasize-text">$128.5 million more benefits</span> and{' '}
                        <span className="emphasize-text">zero injury/incident</span> from my
                        projects.
                      </p>
                    </Box>
                  </div>
                </ProfileCard>
              </Board>
            </Row>
          </Element>
        </Container>
      </Section>
      <Section py={py_section}>
        <Container>
          <Element name="education">
            <Row className="d-flex justify-content-center align-items-center">
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
                        <div className="col-12 col-md-8 profile-card-heading">
                          <Title variant="cardSm" className="profile-card-title">
                            M.Sc. in Computer Science
                          </Title>
                          <Text variant="small" color="text" className="profile-card-organization">
                            <span className="emphasize-text">Chulalongkorn University</span>{' '}
                            <br className="d-flex d-md-none" />
                            (Merit scholarship from Chevron)
                          </Text>
                        </div>
                        {/* <div className="col-12 col-md-4 profile-card-date">
                          <p>2020 – 2022</p>
                        </div> */}
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
                        <div className="col-12 col-md-8 profile-card-heading">
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
                        {/* <div className="col-12 col-md-4 profile-card-date">
                          <p>2008 – 2012</p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </ProfileCard>
              </Board>
            </Row>
          </Element>
        </Container>
      </Section>
      <Section py={py_section}>
        <Container>
          <Element name="skills">
            <Row className="d-flex justify-content-center align-items-center">
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
                      • Data Science : <code>Python💪</code>, <code>Tensorflow</code>,{' '}
                      <code>Scikit-Learn</code>, <code>XGBoost</code>,{' '}
                      <code>Artificial Intelligence</code>, <code>Machine Learning💪</code>,{' '}
                      <code>(Un)Supervised Learning</code>, <code>Tree-Based Model</code>,{' '}
                      <code>Time Series</code>, <code>NLP</code>, <code>Recommender Systems</code>,{' '}
                      <code>Neural Network</code>, <code>Deep Learning</code>,{' '}
                      <code>Optimization</code>, <code>(Integer/Mixed) Linear Programming</code>,{' '}
                      <code>Matplotlib</code>
                    </p>
                    <p>
                      • Software Development : <code>Google Cloud Platform (GCP)</code>,{' '}
                      <code>GCS</code>,<code>BigQuery</code>, <code>Javascript</code>,{' '}
                      <code>VBA</code>, <code>C</code>,<code>Go</code>, <code>SQL</code>,{' '}
                      <code>NoSQL</code>, <code>Git</code>,<code>Design Pattern</code>,{' '}
                      <code>Functional Programming</code>, <code>OOP</code>,<code>CI/CD</code>,{' '}
                      <code>Docker</code>, <code>Github Actions</code>,<code>HTML</code>,{' '}
                      <code>CSS</code>, <code>React</code>, <code>Node.js</code>
                    </p>
                    <p>
                      • Other Expertise : <code>Finance</code>, <code>Credit Card</code>,{' '}
                      <code>Risk Scoring</code>, <code>Statistics</code>,{' '}
                      <code>Financial Analysis</code>, <code>Oil&Gas Production</code>
                    </p>
                    <p>
                      • <code>Project Management</code>, <code>Thai (Native)</code>,{' '}
                      <code>English (Professional)</code>
                    </p>
                  </div>
                </ProfileCard>
              </Board>
            </Row>
          </Element>
        </Container>
      </Section>
      <Section py={py_section}>
        <Container>
          <Element name="awards">
            <Row className="d-flex justify-content-center align-items-center">
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
                      <Link href={mls_2023} target="_blank">
                        Machine Learning Specialization
                      </Link>{' '}
                      by Stanford University •
                      <Link href={cs50x_2023} target="_blank">
                        CS50x
                      </Link>{' '}
                      by Harvard University •{' '}
                      <Link href={mlops_2022} target="_blank">
                        MLOps Specialization
                      </Link>{' '}
                      by Deeplearning.ai •{' '}
                      <Link href={sql_and_databases_2022} target="_blank">
                        SQL and Databases Bootcamp
                      </Link>{' '}
                      •{' '}
                      <Link href={database_engineering_2022} target="_blank">
                        Fundamentals of Database Engineering
                      </Link>{' '}
                      •{' '}
                      <Link href={google_cloud_digital_leader_training_2022} target="_blank">
                        Google Cloud Digital Leader Training
                      </Link>{' '}
                      •{' '}
                      <Link href={clean_code_2022} target="_blank">
                        Clean Code
                      </Link>{' '}
                      •{' '}
                      <Link href={pyspark_2022} target="_blank">
                        PySpark
                      </Link>{' '}
                      (Spark with Python) •{' '}
                      <Link href={devops_terraform_2022} target="_blank">
                        DevOps: Infrastructure As Code With Terraform
                      </Link>{' '}
                      •{' '}
                      <Link href={docker_kubernetes_2022} target="_blank">
                        Docker & Kubernetes
                      </Link>{' '}
                      •{' '}
                      <Link href={feature_engineering_2022} target="_blank">
                        Feature Engineering
                      </Link>{' '}
                      •{' '}
                      <Link href={feature_selection_2022} target="_blank">
                        Feature Selection
                      </Link>{' '}
                      •{' '}
                      <Link href={hyperparameter_optimization_2022} target="_blank">
                        Hyperparameter Optimization
                      </Link>{' '}
                      •{' '}
                      <Link href={mlds_bootcamp_2022} target="_blank">
                        Machine Learning & Data Science Bootcamp
                      </Link>{' '}
                      •{' '}
                      <Link href={system_design_2022} target="_blank">
                        System Design
                      </Link>{' '}
                      •{' '}
                      <Link href={design_patterns_2022} target="_blank">
                        Design Patterns
                      </Link>{' '}
                      •{' '}
                      <Link href={functional_programming_2022} target="_blank">
                        Functional Programming
                      </Link>{' '}
                      •{' '}
                      <Link href={programming_expert} target="_blank">
                        Programming Expert
                      </Link>{' '}
                      (Python and Golang) •{' '}
                      <Link href={python_oop_2022} target="_blank">
                        Python OOP{' '}
                      </Link>
                      •{' '}
                      <Link href={git_github_2022} target="_blank">
                        Git & Github
                      </Link>{' '}
                      •{' '}
                      <Link href={mlexpert_2022} target="_blank">
                        Machine Learning Expert
                      </Link>{' '}
                      •{' '}
                      <Link href={complete_web_dev_ztm_2022} target="_blank">
                        The Complete Web Developer
                      </Link>{' '}
                      •{' '}
                      <Link href={frontend_expert_2023} target="_blank">
                        FrontendExpert
                      </Link>{' '}
                      •{' '}
                      <Link href={algoexpert_2022} target="_blank">
                        AlgoExpert
                      </Link>{' '}
                      (Algorithm, Data Structure) •{' '}
                      <Link href={data_scientist_python_2020} target="_blank">
                        Data Scientist with Python Track
                      </Link>{' '}
                      by Data Camp
                    </p>

                    <p>
                      <br />
                    </p>
                    <p>
                      <Link href="https://basno.com/cy8buily" target="_blank">
                        Chartered Financial Analyst (CFA) I
                      </Link>{' '}
                      •{' '}
                      <Link href={toefl} target="_blank">
                        TOEFL ITP
                      </Link>{' '}
                      (560/677) •{' '}
                      <Link href={toeic} target="_blank">
                        TOEIC
                      </Link>{' '}
                      (925/990)
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
