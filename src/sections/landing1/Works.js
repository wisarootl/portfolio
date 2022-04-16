import React, { useState, useEffect } from 'react'
import { Container, Col } from 'react-bootstrap'
import Masonry from 'react-masonry-component'

import { Section, Box, ListNav, ButtonOutline } from '../../components/Core'
import WorkCard from '../../components/WorkCard'
import { works } from '../../data'
import { device, breakpoints } from '../../utils'

const Works = () => {
  const [items, setItems] = useState([])
  const [activeLink, setActiveLink] = useState('*')

  useEffect(() => {
    setItems(works)
  }, [])

  const filterBy = (cat) => {
    if (cat === '*') {
      setActiveLink('*')
      setItems(works)
    } else {
      const filteredItems = works.filter((item) => {
        return item.categories.indexOf(cat) !== -1
      })
      setActiveLink(cat)
      setItems(filteredItems)
    }
  }

  const masonryOptions = {
    transitionDuration: 1000
  }

  return (
    <>
      {/* <!-- Works Area --> */}
      <Section className="position-relative">
        <Container>
          <Box
            mb="2.5rem"
            ml="-1.75rem"
            css={`
              li a.active {
                background: ${({ theme }) => theme.colors.heading};
                color: ${({ theme }) => theme.colors.bg} !important;
                border-radius: 50rem;
              }
            `}
          >
            <ListNav className="nav">
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === '*' ? 'active' : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    filterBy('*')
                  }}
                >
                  All works
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === 'Data Science' ? 'active' : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    filterBy('Data Science')
                  }}
                >
                  Data Science
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === 'Software Development' ? 'active' : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    filterBy('Software Development')
                  }}
                >
                  Software Development
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === 'Web Development' ? 'active' : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    filterBy('Web Development')
                  }}
                >
                  Web Development
                </a>
              </li>
            </ListNav>
          </Box>
        </Container>

        <Container
          css={`
            .filtr-item {
              @media (max-width: ${breakpoints.sm}px) {
                padding-left: 0px;
                padding-right: 0px;
              }
            }
          `}
        >
          <Masonry options={masonryOptions} className={'masonry-grid row'}>
            {items.map((item, index) => (
              <Col lg="6" sm="12" key={index} className="filtr-item">
                <WorkCard workItem={item} mb="30px" link={item.link} />
              </Col>
            ))}
          </Masonry>
        </Container>
      </Section>
    </>
  )
}

export default Works
