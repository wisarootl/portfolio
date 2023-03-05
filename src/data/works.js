import React from 'react'
import imgT1 from '../assets/img/portfolio/well-list-production-optimization.png'
import imgT2 from '../assets/img/portfolio/pipiline-network-modeling.png'
import imgT3 from '../assets/img/portfolio/natural-language-processing-nlp.jpg'
import imgT4 from '../assets/img/portfolio/deep-learning-for-trading.jpg'
import imgT5 from '../assets/img/portfolio/leetcode.png'
import imgT6 from '../assets/img/portfolio/ml-research-framework.png'
import imgT7 from '../assets/img/portfolio/portfolio-web-site.png'
import imgT8 from '../assets/img/portfolio/jobfair-software-backend.jpg'
import { FaExternalLinkAlt } from 'react-icons/fa'

export const works = [
  {
    title: `Machine Learning Research Framework`,
    categories: [
      `Software Development`,
      `Python`,
      `Design Pattern`,
      `Software Design`,
      `Functional Programming`,
      `Machine Learning`
    ],
    thumbnail: imgT6,
    link: '/ml-research-framework',
    description: (
      <>
        <p>
          Developed a <span className="emphasize-text">highly scalable</span> and{' '}
          <span className="emphasize-text">easily deployable</span> <code>Python</code> framework
          for <code>machine learning</code> research, abstracting various tools, including{' '}
          <code>Scikit-learn</code>, <code>TensorFlow</code>, <code>Optuna</code>,{' '}
          <code>Im&shy;balanced-learn</code>, <code>XGBoost</code>, <code>Seaborn</code>,{' '}
          <code>Mat&shy;plotlib</code>, and others. Includes{' '}
          <span className="emphasize-text">composable</span> core ML components for{' '}
          <code>pre&shy;processing</code>, <code>(un)supervised learning</code>,{' '}
          <code>deep learning</code>, and <code>recommend&shy;ation systems</code>, plus robust
          error handling capabilities in production.
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
      `Time Series`,
      `Neural Network`,
      `Artificial Intelligent`,
      `Finance`,
      `Publication`,
      `Tensorflow`,
      `Keras`,
      `Long Short-Term Memory (LSTM)`,
      `Convolutional Neural Network (CNN)`
    ],
    thumbnail: imgT4,
    link: '/oil-trading-strategy-using-deep-learning',
    description: (
      <>
        <p>
          • Conducted research on <code>time series</code> forecasting models using{' '}
          <code>deep learning</code> techniques for a crude oil trading strategy, and developed a
          model that achieved a remarkable{' '}
          <span className="emphasize-text">17.8% annualized return on invest&shy;ment</span>.
        </p>
        <p>
          •{' '}
          <a
            href="http://www.jait.us/index.php?m=content&c=index&a=show&catid=222&id=1278"
            target="_blank"
          >
            Published 🔥 the research in Journal of Advances in Information Tech&shy;nology
            (Lertthaweedech et al., 2022) <FaExternalLinkAlt className="link-icon" />
          </a>
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
      `Artificial Intelligent`,
      `Web Scraping`,
      `Beautiful Soup`,
      `HTML`,
      `Tensorflow`,
      `Keras`,
      `PythaiNLP`,
      `Scikit-learn (SKlearn)`,
      `Long Short-Term Memory (LSTM)`,
      `Convolutional Neural Networks (CNN)`
    ],
    thumbnail: imgT3,
    link: '/nlp-tagging-recommender',
    description: (
      <p>
        • Researched focus on <code>NLP</code> to apply{' '}
        <span className="emphasize-text">deep learning model in tagging recommender</span> for
        Pantip.com, The most famous discussio website in Thailand. <br />• The model can achieve{' '}
        <span className="emphasize-text">F1 scores of 0.55</span> for 144 unique tags.
      </p>
    )
  },
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
          <span className="emphasize-text">Software Development Practice Class</span> at
          Chulalongkorn University.
        </p>
      </>
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
          Improved my <code>algorithmic</code>, <code>data structure</code>, and <code>coding</code>{' '}
          skills by solving programming questions on Leetcode. This practice has enhanced my ability
          to communicate complex programming concepts and develop a systematic approach to{' '}
          <code>problem-solving</code>.
        </p>
      </>
    )
  },
  {
    title: `Automated Pipeline Network Modeling Software`,
    categories: [`Software Development`, `Python`, `Excel Macro VBA`, `Data Structure`, `Database`],
    thumbnail: imgT2,
    link: '/pipeline-network-modelling',
    description: (
      <>
        <p>
          Led the development of a <span className="emphasize-text">software application</span>{' '}
          using <code>Python</code> and <code>VBA</code> to enable <code>scalable</code> pipeline
          network modeling for Chevron, a world&shy;-&shy;leading Oil & Gas company,{' '}
          <span className="emphasize-text">cutting investment costs by $49.8 million</span>.
        </p>
      </>
    )
  },
  {
    title: `Optimization Application for Gas Field Operations`,
    categories: [
      `Software Development`,
      `Python`,
      `Excel Macro VBA`,
      `Database`,
      `UX/UI`,
      `Collaboration`,
      `ETL`,
      `Optimization Algorithm`,
      `Linear Programming`
    ],
    thumbnail: imgT1,
    link: '/production-optimization',
    description: (
      <>
        <p>
          Designed and developed <span className="emphasize-text">algorithm-driven software</span>{' '}
          using <code>Python</code>, <code>VBA</code>, and <code>linear programming</code> for
          production <code>optimization</code> at Chevron, a world-leading Oil & Gas company,
          resulting in a <span className="emphasize-text">15.2% increase in oil production</span>,{' '}
          <span className="emphasize-text">$15.3 million/year in additional revenue</span>, and
          improved workforce efficiency with reduced errors.
        </p>
      </>
    )
  },
  {
    title: `This Portfolio Website`,
    categories: [
      `Web Development`,
      `Frontend`,
      `Javascript`,
      `React`,
      `HTML`,
      `CSS`,
      `SCSS`,
      `UX/UI`
    ],
    thumbnail: imgT7,
    link: '/',
    description: (
      <>
        <p>
          Created this website to showcase my portfolio, featuring a clean design and easy
          navigation using various web development skills, including <code>JavaScript</code>,{' '}
          <code>React</code>, <code>HTML</code>, <code>CSS</code>, and <code>Bootstrap</code>, to
          build a responsive and visually appealing website.
        </p>
      </>
    )
  }
]
