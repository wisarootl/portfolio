import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Box, Title, Text, Span } from '../Core'
import { FaTags, FaExternalLinkAlt } from 'react-icons/fa'
import { device } from '../../utils'

const WorkBox = styled(Box)`
  transition: 0.4s;
  :hover {
    transform: translateY(-2%);
  }
`
const TextBox = styled(Box)`
  bottom: 0px;
  left: 20px;
  right: 20px;
  padding: 1.25rem 15px;
  @media ${device.sm} {
    padding: 1.25rem 1.875rem;
  }

  transition: 0.4s;
  background: ${({ theme }) => theme.colors.shadow};

  .port-tag {
    font-size: 0.85rem;
  }

  .port-more {
    font-size: 0.85rem;
  }
`

const WorkCard = ({ workItem, link, ...rest }) => (
  <WorkBox className="position-relative" {...rest}>
    <Link to={link !== undefined ? link : '#'} className="d-block" target="_blank">
      <img src={workItem.thumbnail} alt="" className="w-100" />
    </Link>

    <TextBox pt="1.5rem" className="overflow-hidden text-center" pb="2.5rem">
      <Text variant="tag" mb="0.5rem">
        {workItem.categories[0]}
      </Text>
      <Title variant="cardLg">
        <Link to={workItem.link !== undefined ? workItem.link : '#'} target="_blank">
          {workItem.title}
        </Link>
      </Title>
      <Box
        className="text-left"
        css={`
          p {
            font-size: 0.95rem;
            text-align: justify;
          }
        `}
      >
        {workItem.description}
      </Box>
      <div className="row justify-content-center align-items-center pt-2 pb-3">
        <div className={workItem.link !== undefined ? 'col-sm-11' : 'col-sm-12'}>
          <Text variant="small" mt="0.5rem" className="text-left port-tag">
            <FaTags className="mr-1" />
            {workItem.categories.map((item, index) => (
              <span key={index}>
                <code>{item}</code>
                {workItem.categories.length !== index + 1 ? ', ' : ''}
              </span>
            ))}
          </Text>
        </div>
        {workItem.link !== undefined ? (
          <div className="col-sm-1">
            <Text className="text-right port-more" color="text">
              <Link to={workItem.link} color="text" target="_blank">
                <FaExternalLinkAlt />
              </Link>
            </Text>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </TextBox>
  </WorkBox>
)

export default WorkCard
