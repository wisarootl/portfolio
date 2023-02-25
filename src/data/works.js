import React from 'react'
import imgT1 from '../assets/img/portfolio/well-list-production-optimization.png'
import imgT2 from '../assets/img/portfolio/pipiline-network-modeling.png'
import imgT3 from '../assets/img/portfolio/natural-language-processing-nlp.jpg'
import imgT4 from '../assets/img/portfolio/deep-learning-for-trading.jpg'
import imgT5 from '../assets/img/portfolio/leetcode.png'
import imgT6 from '../assets/img/portfolio/face-recognition.png'
import imgT7 from '../assets/img/portfolio/portfolio-web-site.png'
import imgT8 from '../assets/img/portfolio/jobfair-software-backend.jpg'

export const works = [
  {
    title: `Online Job Fair Registration Software [Backend]`,
    categories: [
      `Software Development`,
      `Backend`,
      `Node.js`,
      `Database`,
      `API`,
      `MongoDB`,
      `SQL`,
      `Cyber Security`
    ],
    thumbnail: imgT8,
    link: 'https://github.com/wisarootl/online-job-fair-registration',
    description: (
      <>
        <p>
          • Demo backend project for online job fair registration. This project is an assignment of{' '}
          <span className="emphasize-text">Software Development Practice Class</span> (2110503) at
          department of Computer Engineering, Chulalongkorn University.
        </p>
      </>
    )
  },
  {
    title: `Oil Trading Strategy using Deep Learning`,
    categories: [
      `Data Science`,
      `Python`,
      `Machine Learning`,
      `Deep Learning`,
      `Neural Network`,
      `Artificial Intelligent`,
      `Finance`,
      `Publication`
    ],
    thumbnail: imgT4,
    link: '/oil-trading-strategy-using-deep-learning',
    description: (
      <>
        <p>
          • Researched focus on <span className="emphasize-text">time series</span> forecasting
          using deep learning model for crude oil trading strategy. <br />• Proposed model can get
          the highest ROI which is <span className="emphasize-text">10% annualized return</span>{' '}
          during 2015 to 2020 with minimal drawdown along the test periods. While other strategies
          including Buy & Hold and traditional technical indicator gives ann. ROI between -100% to
          2.8% only.
        </p>
      </>
    )
  },
  {
    title: `Tagging Recommender using Deep Learning Model`,
    categories: [
      `Data Science`,
      `Python`,
      `Natural Language Processing (NLP)`,
      `Machine Learning`,
      `Deep Learning`,
      `Neural Network`,
      `Artificial Intelligent`
    ],
    thumbnail: imgT3,
    link: '/nlp-tagging-recommender',
    description: (
      <p>
        • Researched focus on <code>NLP</code> to apply{' '}
        <span className="emphasize-text">deep learning model in tagging recommender</span>
        for Pantip.com, The most famous discussio website in Thailand. <br />• The model can achieve{' '}
        <span className="emphasize-text">F1 scores of 0.55</span> for different 144 tags.
      </p>
    )
  },
  {
    title: `Leetcode Practice`,
    categories: [
      `Training`,
      `Algorithm`,
      `Data Structure`,
      `Python`,
      `Coding`,
      `Problem Solving`,
      `Communication`
    ],
    thumbnail: imgT5,
    link: 'https://github.com/wisarootl/leetcode',
    description: (
      <>
        <p>
          Continuously solving programming questions to sharpen my <code>Algorithms</code>,{' '}
          <code>Data Structure</code> and <code>Coding</code> skills.
        </p>
      </>
    )
  },
  {
    title: `Application for Pipeline Network Modelling`,
    categories: [`Software Development`, `Python`, `Excel Macro VBA`, `Data Structure`, `Database`],
    thumbnail: imgT2,
    link: '/pipeline-network-modelling',
    description: (
      <>
        <p>
          • Developed an in-house <span className="emphasize-text">software application</span> for
          Chevron, a world-leading Oil & Gas company, to automatically generate a pipeline network
          model for gas fields in the simulator.
          <br />• Researched optimized pipeline network scenarios saving investment costs for{' '}
          <span className="emphasize-text">49.8 million USD</span>.
        </p>
      </>
    )
  },
  {
    title: `Application for Production Optimization`,
    categories: [
      `Software Development`,
      `Excel Macro VBA`,
      `Database`,
      `UX/UI`,
      `Collaboration`,
      `ETL`
    ],
    thumbnail: imgT1,
    link: '/production-optimization',
    description: (
      <>
        <p>
          Developed an in-house <span className="emphasize-text">software application</span> for
          Chevron, a world-leading Oil & Gas company, to automatically optimize Gas and Oil
          production with limited resources and constraints resulting in 16.5% higher oil
          production, more revenue of <span className="emphasize-text">15.3 million USD/year</span>.
        </p>
      </>
    )
  },
  // todo
  // {
  //   title: `Face Recognition AI`,
  //   categories: [
  //     `Web Development`,
  //     `Frontend`,
  //     `Backend`,
  //     `Database`,
  //     `Javascript`,
  //     `SQL`,
  //     `React`,
  //     `HTML`,
  //     `CSS`,
  //     `Node.js`
  //   ],
  //   thumbnail: imgT6,
  //   link: 'https://face-recognition-ai-frontend.herokuapp.com/',
  //   description: (
  //     <>
  //       <p>
  //         Developed a demo website for face recognition. The relevant skills including{' '}
  //         <code>Frontend</code>, <code>React</code>, <code>Javascript</code>, <code>HTML</code>,{' '}
  //         <code>CSS</code>, <code>Backend</code>, <code>Node.js</code>, <code>Express.js</code>,{' '}
  //         <code>Clarifai (ML API)</code>, <code>Database</code>, <code>SQL</code>,{' '}
  //         <code>PostgeSQL</code>
  //         <br />
  //       </p>
  //       <p className="text-center port-tag">
  //         [
  //         <a href="https://face-recognition-ai-frontend.herokuapp.com/" target="_blank">
  //           See Live
  //         </a>
  //         ] &nbsp;&nbsp;[
  //         <a href="https://github.com/wisarootl/face-recognition-ai-frontend" target="_blank">
  //           Source Code : Frontend
  //         </a>
  //         ] &nbsp;&nbsp;[
  //         <a href="https://github.com/wisarootl/face-recognition-ai-backend" target="_blank">
  //           Source Code : Backend
  //         </a>
  //         ]
  //       </p>
  //     </>
  //   )
  // },
  {
    title: `This Portfolio Website`,
    categories: [`Web Development`, `Frontend`, `Javascript`, `React`, `HTML`, `CSS`, `SCSS`],
    thumbnail: imgT7,
    link: '/',
    description: (
      <>
        <p>
          • Developed this website to serve as a portfolio showcase.
          <br />• The relevant skills including <code>Frontend</code>, <code>React</code>,{' '}
          <code>Javascript</code>, <code>HTML</code>, <code>CSS</code>, <code>SCSS</code>,{' '}
          <code>UX/UI</code>
        </p>
      </>
    )
  }
  // {
  //   title: `Leetcode Practice`,
  //   categories: [`Training`, `Algorithm`, `Data Sturcture`],
  //   thumbnail: imgT5,
  //   link: undefined,
  //   description: (
  //     <>
  //       <p>test</p>
  //     </>
  //   )
  // }
]
